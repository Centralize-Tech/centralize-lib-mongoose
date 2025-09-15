import { Schema, Connection } from 'mongoose';
import { IProductFalabella } from '../../types/Falabella/IProductFalabella';
export declare const productFalabellaSchema: Schema<IProductFalabella, import("mongoose").Model<IProductFalabella, any, any, any, import("mongoose").Document<unknown, any, IProductFalabella, any, {}> & IProductFalabella & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, IProductFalabella, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<IProductFalabella>, {}, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & import("mongoose").FlatRecord<IProductFalabella> & Required<{
    _id: unknown;
}> & {
    __v: number;
}>;
export declare function createProductFalabellaModel(conn: Connection): import("mongoose").Model<IProductFalabella, {}, {}, {}, import("mongoose").Document<unknown, {}, IProductFalabella, {}, {}> & IProductFalabella & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>;
