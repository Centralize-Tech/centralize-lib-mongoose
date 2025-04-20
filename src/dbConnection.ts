import mongoose, { Connection } from 'mongoose';

import config from './config';

const DB_URLS: Record<string, string> = {
  '1234': config.mongooseDB.DBHost
};

const CONNECTIONS_MAP: Map<string, Connection> = new Map();

export function getConnection(enterpriseId: string): Connection {
  if (CONNECTIONS_MAP.has(enterpriseId)) {
    return CONNECTIONS_MAP.get(enterpriseId)!;
  }

  const uri = DB_URLS[enterpriseId] || DB_URLS['1234'];
  const newConn = mongoose.createConnection(uri);

  CONNECTIONS_MAP.set(enterpriseId, newConn);
  return newConn;
}
