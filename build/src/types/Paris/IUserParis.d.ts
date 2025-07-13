import { Document } from 'mongoose';
export interface IUserParis extends Document {
    accessToken: string;
    clientId: string;
    mail: string;
    enterpriseId: string;
    first_mame: string;
    last_name: string;
    seller_id: string;
    seller_name: string;
    token: string;
}
