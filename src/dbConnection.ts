import mongoose, { Connection } from 'mongoose';

import config from './config';

const DB_URLS: Record<string, string> = {
  'Centralize': config.mongooseDB.DBHostCentralize,
  'Paris': config.mongooseDB.DBHostParis,
  'Falabella': config.mongooseDB.DBHostFalabella,
  'Ripley': config.mongooseDB.DBHostFalabella,
  'Meli': config.mongooseDB.DBHostMeli
};

const CONNECTIONS_MAP: Map<string, Connection> = new Map();

// Opciones de conexión optimizadas para AWS Lambda
const CONNECTION_OPTIONS = {
  serverSelectionTimeoutMS: 5000, // Timeout para selección de servidor
  socketTimeoutMS: 45000, // Timeout para operaciones de socket
  connectTimeoutMS: 10000, // Timeout para conexión inicial
  maxPoolSize: 1, // Para Lambda, mantener pool pequeño
  minPoolSize: 0, // No mantener conexiones activas
  maxIdleTimeMS: 30000, // Cerrar conexiones inactivas después de 30s
  retryWrites: true,
  retryReads: true,
  bufferCommands: false, // Deshabilitar buffering para Lambda
  bufferMaxEntries: 0,
  // Opciones específicas para AWS Lambda
  keepAlive: true,
  keepAliveInitialDelay: 300000, // 5 minutos
};

export function getConnection(marketplace: string): Connection {
  if (CONNECTIONS_MAP.has(marketplace)) {
    const existingConn = CONNECTIONS_MAP.get(marketplace)!;
    
    // Verificar si la conexión está activa
    if (existingConn.readyState === 1) {
      return existingConn;
    }
    
    // Si la conexión no está activa, removerla del mapa
    CONNECTIONS_MAP.delete(marketplace);
  }

  const uri = DB_URLS[marketplace] || DB_URLS['Centralize'];
  
  if (!uri) {
    throw new Error(`No se encontró URI de conexión para el marketplace: ${marketplace}`);
  }

  console.log(`Creando nueva conexión para marketplace: ${marketplace}`);
  
  const newConn = mongoose.createConnection(uri, CONNECTION_OPTIONS);

  // Manejar eventos de conexión
  newConn.on('connected', () => {
    console.log(`Conexión establecida para marketplace: ${marketplace}`);
  });

  newConn.on('error', (error) => {
    console.error(`Error en conexión para marketplace ${marketplace}:`, error);
    CONNECTIONS_MAP.delete(marketplace);
  });

  newConn.on('disconnected', () => {
    console.log(`Conexión desconectada para marketplace: ${marketplace}`);
    CONNECTIONS_MAP.delete(marketplace);
  });

  CONNECTIONS_MAP.set(marketplace, newConn);
  return newConn;
}

// Función para cerrar todas las conexiones (útil para Lambda)
export async function closeAllConnections(): Promise<void> {
  const closePromises = Array.from(CONNECTIONS_MAP.values()).map(conn => {
    if (conn.readyState === 1) {
      return conn.close();
    }
    return Promise.resolve();
  });
  
  await Promise.all(closePromises);
  CONNECTIONS_MAP.clear();
  console.log('Todas las conexiones han sido cerradas');
}

// Función para verificar el estado de una conexión
export function isConnectionReady(marketplace: string): boolean {
  const conn = CONNECTIONS_MAP.get(marketplace);
  return conn ? conn.readyState === 1 : false;
}

// Función helper para ejecutar operaciones de base de datos con manejo de errores
export async function executeWithConnection<T>(
  marketplace: string,
  operation: (connection: Connection) => Promise<T>,
  maxRetries: number = 3
): Promise<T> {
  let lastError: Error | null = null;
  
  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      const connection = getConnection(marketplace);
      
      // Esperar a que la conexión esté lista si no lo está
      if (connection.readyState !== 1) {
        console.log(`Esperando conexión para marketplace: ${marketplace}, intento ${attempt}`);
        await new Promise<void>((resolve, reject) => {
          const timeout = setTimeout(() => {
            reject(new Error(`Timeout esperando conexión para marketplace: ${marketplace}`));
          }, 10000);
          
          const checkConnection = () => {
            if (connection.readyState === 1) {
              clearTimeout(timeout);
              resolve();
            } else if (connection.readyState === 0) {
              setTimeout(checkConnection, 100);
            } else {
              clearTimeout(timeout);
              reject(new Error(`Conexión falló para marketplace: ${marketplace}`));
            }
          };
          
          checkConnection();
        });
      }
      
      return await operation(connection);
      
    } catch (error) {
      lastError = error as Error;
      console.error(`Error en intento ${attempt} para marketplace ${marketplace}:`, error);
      
      // Si no es el último intento, limpiar la conexión y reintentar
      if (attempt < maxRetries) {
        CONNECTIONS_MAP.delete(marketplace);
        await new Promise(resolve => setTimeout(resolve, 1000 * attempt)); // Backoff exponencial
      }
    }
  }
  
  throw new Error(`Operación falló después de ${maxRetries} intentos para marketplace ${marketplace}: ${lastError?.message}`);
}
