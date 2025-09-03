import { Document } from 'mongoose';


export interface IEnterpriseCentralize extends Document {
  name: string;
  lastName?: string;
  email: string;
  phone?: string;
  rut: string;
  description?: string;
  companyName: string;
  marketplace?: IMarketplace[];
  status: boolean;
}

interface IMarketplace {
  name: string;
  apiKey: string;
  status: boolean;
}
