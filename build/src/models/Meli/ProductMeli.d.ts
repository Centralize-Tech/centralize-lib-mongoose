import { Connection, Schema } from 'mongoose';
import { IProductMeli } from '../../types';
export declare const productMeliSchema: Schema<IProductMeli, import("mongoose").Model<IProductMeli, any, any, any, import("mongoose").Document<unknown, any, IProductMeli, any, {}> & IProductMeli & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, IProductMeli, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<IProductMeli>, {}, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & import("mongoose").FlatRecord<IProductMeli> & Required<{
    _id: unknown;
}> & {
    __v: number;
}>;
export declare function createProductMeliModel(conn: Connection): import("mongoose").Model<IProductMeli, {}, {}, {}, import("mongoose").Document<unknown, {}, IProductMeli, {}, {}> & IProductMeli & Required<{
    _id: unknown;
}> & {
    __v: number;
}, Schema<IProductMeli, import("mongoose").Model<IProductMeli, any, any, any, import("mongoose").Document<unknown, any, IProductMeli, any, {}> & IProductMeli & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, IProductMeli, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<IProductMeli>, {}, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & import("mongoose").FlatRecord<IProductMeli> & Required<{
    _id: unknown;
}> & {
    __v: number;
}>>;
