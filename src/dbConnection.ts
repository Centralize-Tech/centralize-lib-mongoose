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

// Configuración optimizada para AWS Lambda
const CONNECTION_OPTIONS = {
  serverSelectionTimeoutMS: 10000,
  socketTimeoutMS: 45000,
  connectTimeoutMS: 20000,
  maxPoolSize: 1,
  minPoolSize: 0,
  bufferCommands: false
};

export function getConnection(marketplace: string): Connection {
  if (CONNECTIONS_MAP.has(marketplace)) {
    const existingConn = CONNECTIONS_MAP.get(marketplace)!;
    if (existingConn.readyState === 1) {
      return existingConn;
    }
    CONNECTIONS_MAP.delete(marketplace);
  }

  const uri = DB_URLS[marketplace] || DB_URLS['Centralize'];
  
  if (!uri) {
    throw new Error(`No se encontró URI de conexión para el marketplace: ${marketplace}`);
  }

  console.log(`Creando conexión para marketplace: ${marketplace}`);
  
  const newConn = mongoose.createConnection(uri, CONNECTION_OPTIONS);

  // Agregar listeners de eventos para debug
  newConn.on('connected', () => {
    console.log(`Conexión establecida para marketplace: ${marketplace}`);
  });

  newConn.on('error', (error) => {
    console.error(`Error en conexión para marketplace ${marketplace}:`, error);
  });

  newConn.on('disconnected', () => {
    console.log(`Conexión desconectada para marketplace: ${marketplace}`);
  });

  CONNECTIONS_MAP.set(marketplace, newConn);
  return newConn;
}

export async function getConnectionAsync(marketplace: string): Promise<Connection> {
  const connection = getConnection(marketplace);
  
  if (connection.readyState === 1) {
    return connection;
  }

  return new Promise((resolve, reject) => {
    const timeout = setTimeout(() => {
      reject(new Error(`Connection timeout for marketplace: ${marketplace}`));
    }, 30000); // Aumentado a 30 segundos

    const checkConnection = () => {
      console.log(`Estado de conexión para ${marketplace}: ${connection.readyState}`);
      
      if (connection.readyState === 1) {
        clearTimeout(timeout);
        resolve(connection);
      } else if (connection.readyState === 0 || connection.readyState === 2) {
        // Estado 0 = disconnected, Estado 2 = connecting
        setTimeout(checkConnection, 500); // Aumentado el intervalo
      } else {
        clearTimeout(timeout);
        reject(new Error(`Connection failed for marketplace: ${marketplace}. State: ${connection.readyState}`));
      }
    };

    checkConnection();
  });
}
