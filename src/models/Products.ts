import { Schema, Connection } from 'mongoose';

import { IProducts } from '../types';

export const productsSchema = new Schema<IProducts>({
  description: { type: String, required: true },
  enterpriseId: { type: String, required: true },
  extraData: { type: Object, required: true },
  zise: { type: String, required: false },
  sku: { type: String, required: true },
  title: { type: String, required: true },
  attachments: { type: [String], required: true },
  height: { type: Number, required: false },
  length: { type: Number, required: false },
  weight: { type: Number, required: false },
  width: { type: Number, required: false },
  imageUrl: { type: String, required: false },
}, { timestamps: true });

export function createProductsModel(conn: Connection) {
  return conn.model<IProducts>('Products', productsSchema);
};
