import { Document } from 'mongoose';
export interface IBuyer extends Document {
    enterpriseId: string;
    address: IAddress;
    email: string;
    id: string;
    lastName: string;
    name: string;
    phone: string;
}
export interface IAddress {
    additional_info: string | null;
    city: string;
    company: string | null;
    company_2: string | null;
    country: string;
}
