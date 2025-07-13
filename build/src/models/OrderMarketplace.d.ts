import { Schema, Connection } from 'mongoose';
import { IOrderMarketplace } from '../types';
export declare const orderMarketplaceSchema: Schema<IOrderMarketplace, import("mongoose").Model<IOrderMarketplace, any, any, any, import("mongoose").Document<unknown, any, IOrderMarketplace> & IOrderMarketplace & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, IOrderMarketplace, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<IOrderMarketplace>> & import("mongoose").FlatRecord<IOrderMarketplace> & Required<{
    _id: unknown;
}> & {
    __v: number;
}>;
export declare function createOrderMarketplaceModel(conn: Connection): import("mongoose").Model<IOrderMarketplace, {}, {}, {}, import("mongoose").Document<unknown, {}, IOrderMarketplace> & IOrderMarketplace & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>;
