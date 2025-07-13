import { Schema, Connection } from 'mongoose';
import { IProducts } from '../types';
export declare const productsSchema: Schema<IProducts, import("mongoose").Model<IProducts, any, any, any, import("mongoose").Document<unknown, any, IProducts> & IProducts & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, IProducts, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<IProducts>> & import("mongoose").FlatRecord<IProducts> & Required<{
    _id: unknown;
}> & {
    __v: number;
}>;
export declare function createProductsModel(conn: Connection): import("mongoose").Model<IProducts, {}, {}, {}, import("mongoose").Document<unknown, {}, IProducts> & IProducts & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>;
