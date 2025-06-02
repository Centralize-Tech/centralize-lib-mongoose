import { Schema, Connection } from 'mongoose';

import { IUserParis } from '../types';

export const userParisSchema = new Schema<IUserParis>({
  accessToken: { type: String, required: true },
  clientId: { type: String, required: true },
  mail: { type: String, required: true },
  enterpriseId: { type: String, required: true },
  first_mame: { type: String, required: true },
  last_name: { type: String, required: true },
  seller_id: { type: String, required: true },
  seller_name: { type: String, required: true },
  token: { type: String, required: true },
}, { timestamps: true });

export function createUserParisModel(conn: Connection) {
  return conn.model<IUserParis>('Users', userParisSchema);
};
