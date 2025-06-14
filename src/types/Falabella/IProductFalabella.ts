import { Document } from 'mongoose';

export interface IProductFalabella extends Document {
  requestId: string;
  enterpriseId: string;
  sku: string;
  product: Object;
}
