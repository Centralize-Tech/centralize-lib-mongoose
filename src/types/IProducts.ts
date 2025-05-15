import { Document } from 'mongoose';

export interface IProducts extends Document {
  description: string;
  enterpriseId: string;
  extraData: any;
  zise?: string;
  sku: string;
  title: string;
  attachments: Array<string>;
  height?: number;
  length?: number;
  weight?: number;
  width?: number;
  imageUrl?: string;
}
