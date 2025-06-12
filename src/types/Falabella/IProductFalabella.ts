import { Document } from 'mongoose';

export interface IProductFalabella extends Document {
  requestId: string;
  enterpriseId: string;
  product: Object;
}
