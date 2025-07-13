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
  serverSelectionTimeoutMS: 5000,
  socketTimeoutMS: 45000,
  connectTimeoutMS: 10000,
  maxPoolSize: 1,
  minPoolSize: 0,
  bufferCommands: false,
  bufferMaxEntries: 0
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
  const newConn = mongoose.createConnection(uri, CONNECTION_OPTIONS);

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
    }, 10000);

    const checkConnection = () => {
      if (connection.readyState === 1) {
        clearTimeout(timeout);
        resolve(connection);
      } else if (connection.readyState === 0) {
        setTimeout(checkConnection, 100);
      } else {
        clearTimeout(timeout);
        reject(new Error(`Connection failed for marketplace: ${marketplace}`));
      }
    };

    checkConnection();
  });
}
