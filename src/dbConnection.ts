import mongoose, { Connection } from 'mongoose';

import config from './config';

const DB_URLS: Record<string, string> = {
  '1234': config.mongooseDB.DBHost,
  'Paris:': config.mongooseDB.DBHostParis,
  'Falabella:': config.mongooseDB.DBHostFalabella,
  'Ripley:': config.mongooseDB.DBHostFalabella,
  'Meli': config.mongooseDB.DBHostMeli
};

const CONNECTIONS_MAP: Map<string, Connection> = new Map();

export function getConnection(enterpriseId: string): Connection {
  if (CONNECTIONS_MAP.has(enterpriseId)) {
    return CONNECTIONS_MAP.get(enterpriseId)!;
  }

  console.log('DB_URLS', DB_URLS);
  console.log('enterpriseId', enterpriseId);
  console.log('DB_URLS[enterpriseId]', DB_URLS[enterpriseId]);
  const uri = DB_URLS[enterpriseId] || DB_URLS['1234'];
  console.log('uri', uri);
  const newConn = mongoose.createConnection(uri);

  CONNECTIONS_MAP.set(enterpriseId, newConn);
  return newConn;
}
