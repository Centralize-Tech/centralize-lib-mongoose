import { Connection, Schema } from 'mongoose';

import { IUsers } from '../types';

const usersSchema = new Schema<IUsers>({
  accessToken: { type: String, required: true },
  enterpriseId: { type: String, required: true },
  clientId: { type: String, required: true },
  email: { type: String, required: true },
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  seller_id: { type: String, required: true },
  seller_name: { type: String, required: true },
  token: { type: String, required: true },
}, { timestamps: true });

export function usersModel(conn: Connection) {
  return conn.model<IUsers>('Users', usersSchema);
}
