import { Document } from 'mongoose';

export interface IMessage extends Document {
  orderId: string;
  content: Object;
  createdBy: string;
  enterpriseId: string;
}
