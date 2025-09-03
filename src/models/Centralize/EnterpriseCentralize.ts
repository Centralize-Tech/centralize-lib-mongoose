import { Schema, Connection } from 'mongoose';

import { IEnterpriseCentralize } from '../../types/Centralize/IEnterpriseCentralize';

export const enterpriseCentralizeSchema = new Schema<IEnterpriseCentralize>({
  name: { type: String, required: true },
  lastName: { type: String, required: false },
  email: { type: String, required: true },
  phone: { type: String, required: false },
  rut: { type: String, required: true },
  description: { type: String, required: false },
  companyName: { type: String, required: true, unique: true },
  marketplace: [{ 
    name: { type: String, required: true },
    apikey: { type: String, required: true },
    status: { type: Boolean, required: true, default: true }
  }],
  status: { type: Boolean, required: true, default: true },
}, { timestamps: true });

export function createEnterpriseCentralizeModel(conn: Connection) {
  return conn.model<IEnterpriseCentralize>('Enterprises', enterpriseCentralizeSchema);
};
