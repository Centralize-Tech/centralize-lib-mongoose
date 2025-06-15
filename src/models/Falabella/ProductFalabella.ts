import { Schema, Connection } from 'mongoose';

import { IProductFalabella } from '../../types/Falabella/IProductFalabella';

export const productFalabellaSchema = new Schema<IProductFalabella>({
  requestId: { type: String, required: true },
  enterpriseId: { type: String, required: true },
  sku: { type: String, required: true },
  image: { type: Schema.Types.Mixed, required: true },
  product: { type: Schema.Types.Mixed, required: true },
}, { timestamps: true });

export function createProductFalabellaModel(conn: Connection) {
  return conn.model<IProductFalabella>('Products', productFalabellaSchema);
};
