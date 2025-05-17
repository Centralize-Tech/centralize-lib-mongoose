import { Connection, Schema } from 'mongoose';

import { IBuyer } from '../types';

const buyerSchema = new Schema<IBuyer>({
  enterpriseId: { type: String, required: true },
  address: {
    additional_info: { type: String, default: null },
    city: { type: String, required: true },
    company: { type: String, default: null },
    company_2: { type: String, default: null },
    country: { type: String, required: true }
  },
  email: { type: String, required: true },
  id: { type: String, required: true },
  lastName: { type: String, required: true },
  name: { type: String, required: true },
  phone: { type: String, required: true }
}, { timestamps: true });

export function createBuyerModel(conn: Connection) {
  return conn.model<IBuyer>('Buyer', buyerSchema);
}
