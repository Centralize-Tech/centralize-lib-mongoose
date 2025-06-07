import { Schema, Connection } from 'mongoose';

import { IUserFalabella } from '../../types/Falabella/IUserFalabella';

export const userFalabellaSchema = new Schema<IUserFalabella>({
  mail: { type: String, required: true },
  enterpriseId: { type: String, required: true },
  first_mame: { type: String, required: true },
  last_name: { type: String, required: true },
  seller_name: { type: String, required: true },
  userId: { type: String, required: true },
  token: { type: String, required: true },
  status: { type: Boolean, required: true, default: true },
}, { timestamps: true });

export function createUserFalabellaModel(conn: Connection) {
  return conn.model<IUserFalabella>('Users', userFalabellaSchema);
};
