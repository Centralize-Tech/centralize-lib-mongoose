import { Document } from 'mongoose';

export interface IUserFalabella extends Document {
  mail: string;
  enterpriseId: string;
  first_mame: string;
  last_name: string;
  seller_name: string;
  userId: string;
  token: string;
  status: boolean;
}
