import { Schema, Connection } from 'mongoose';

import { IProductFalabella } from '../../types/Falabella/IProductFalabella';

export const productFalabellaSchema = new Schema<IProductFalabella>({
  requestId: { type: String, required: true },
  enterpriseId: { type: String, required: true },
  product: { type: Object, required: true },
}, { timestamps: true });

export function createProductFalabellaModel(conn: Connection) {
  return conn.model<IProductFalabella>('Products', productFalabellaSchema);
};
