import { Schema, Connection } from 'mongoose';
import { IProductParis } from '../../types/Paris/IProductParis';
export declare const productParisSchema: Schema<IProductParis, import("mongoose").Model<IProductParis, any, any, any, import("mongoose").Document<unknown, any, IProductParis, any, {}> & IProductParis & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, IProductParis, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<IProductParis>, {}, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & import("mongoose").FlatRecord<IProductParis> & Required<{
    _id: unknown;
}> & {
    __v: number;
}>;
export declare function createProductParisModel(conn: Connection): import("mongoose").Model<IProductParis, {}, {}, {}, import("mongoose").Document<unknown, {}, IProductParis, {}, {}> & IProductParis & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>;
