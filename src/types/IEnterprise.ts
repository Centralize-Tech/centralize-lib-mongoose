import { Document } from 'mongoose';

export interface IEnterprise extends Document {
  name: string;
  status: boolean;
  description: string;
  loginCode: string;
  marketplaces: Array<IMarketplace>;
  enterpriseStatus?: 'active' | 'inactive';
}

export interface IMarketplace {
  status: any;
  type: string;
  apiKey?: string;
  apiSecret?: string;
  token?: string;
  refreshToken?: string;
  expiresIn?: number;
  account?: any;
}
