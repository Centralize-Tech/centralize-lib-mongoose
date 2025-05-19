import { Schema, Connection } from 'mongoose';

import { IProductCentralize } from '../types';

export const productCentralizeSchema = new Schema<IProductCentralize>({
  title: { type: String, required: true },
  description: { type: String, required: true },
  length: { type: Number, required: true },
  width: { type: Number, required: true },
  height: { type: Number, required: true },
  weight: { type: Number, required: true },
  sku: { type: String, required: true },
  attatchments: {type: [], required: false, default: []},
  extraData: {
    type: Object, 
    required: false,
  },
  enterpriseId: {type: String, required: true},
}, { timestamps: true });

productCentralizeSchema.index({ sku: 1, enterpriseId: 1 }, { unique: true });

export function createProductCentralizeModel(conn: Connection) {
  return conn.model<IProductCentralize>('ProductCentralize', productCentralizeSchema);
}
