import mongoose, { Connection } from 'mongoose';

import config from './config';

const DB_URLS: Record<string, string> = {
  '1234': config.mongooseDB.DBHost,
  'Paris': config.mongooseDB.DBHostParis,
  'Falabella': config.mongooseDB.DBHostFalabella,
  'Ripley': config.mongooseDB.DBHostFalabella,
  'Meli': config.mongooseDB.DBHostMeli
};

const CONNECTIONS_MAP: Map<string, Connection> = new Map();

export function getConnection(marketplace: string): Connection {
  if (CONNECTIONS_MAP.has(marketplace)) {
    return CONNECTIONS_MAP.get(marketplace)!;
  }

  const uri = DB_URLS[marketplace] || DB_URLS['1234'];
  const newConn = mongoose.createConnection(uri);

  CONNECTIONS_MAP.set(marketplace, newConn);
  return newConn;
}
