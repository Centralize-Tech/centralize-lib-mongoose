import { Document } from 'mongoose';

export interface IProductCentralize extends Document {
  enterpriseId: string;
  title: string;
  description: string;
  length: number;
  width: number;
  height: number;
  weight: number;
  sku: string;
  extraData: Object;
  attatchments: Array<string>;
}
