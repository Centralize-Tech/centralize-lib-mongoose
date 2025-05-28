import { Schema, Connection, Types } from 'mongoose';

import { IProductParis } from '../types';

export const productParisSchema = new Schema<IProductParis>({
  id: { type: String, required: true },
  name: { type: String, required: true },
  family: { type: Object, required: true },
  category: { type: Object, required: true },
  channels: [{ type: Object, required: true }],
  sellerId: { type: String, required: true },
  sellerSku: { type: String, required: true },
  refProduct: { type: String, required: true },
  attributes: [{ type: Object, required: true }],
  status: { type: String, required: true },
  variants: [{ type: Object, required: true }],
}, { timestamps: true });

export function createProductParisModel(conn: Connection) {
  return conn.model<IProductParis>('Products', productParisSchema);
};
