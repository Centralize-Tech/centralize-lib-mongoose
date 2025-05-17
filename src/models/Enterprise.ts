import { Connection, Schema } from 'mongoose';

import { IEnterprise } from '../types';

const enterpriseSchema = new Schema<IEnterprise>({
  name: { type: String, required: true },
  status: { type: Boolean, required: true },
  loginCode: { type: String, required: true},
  description: { type: String, required: true },
  enterpriseStatus: { type: String, enum: ['active', 'inactive'] },
  marketplaces: [{
    type: { type: String, required: true },
    apiKey: { type: String, required: false },
    apiSecret: { type: String, required: false },
    token: { type: String, required: false },
    refreshToken: { type: String, required: false },
    expiresIn: { type: Number, required: false },
    account: { type: Schema.Types.Mixed, required: false }
  }],
}, { timestamps: true });

export function createEnterpriseModel(conn: Connection) {
  return conn.model<IEnterprise>('Enterprise', enterpriseSchema);
}
