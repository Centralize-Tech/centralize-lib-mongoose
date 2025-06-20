import { Schema, Connection } from 'mongoose';

import { IUserCentralize } from '../../types/Centralize/IUserCentralize';

export const userCentralizeSchema = new Schema<IUserCentralize>({
  enterpriseId: { type: String, required: true },
  rol: { type: String, required: true },
  status: { type: Boolean, required: true, default: true },
  rut: { type: String, required: true },
  name: { type: String, required: true },
  loginCode: { type: String, required: true, unique: true },
}, { timestamps: true });

export function createUserCentralizeModel(conn: Connection) {
  return conn.model<IUserCentralize>('Users', userCentralizeSchema);
};
