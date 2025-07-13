import { Document } from 'mongoose';
export interface IUserCentralize extends Document {
    enterpriseId: string;
    rol: string;
    status: boolean;
    rut: string;
    name: string;
    loginCode: string;
}
