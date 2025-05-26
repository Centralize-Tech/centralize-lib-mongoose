import { Document } from 'mongoose';

export interface IUsers extends Document {
  accessToken: string;
  enterpriseId: string;
  clientId: string;
  email: string;
  first_name: string;
  last_name: string;
  seller_id: string;
  seller_name: string;
  token: string;
}
