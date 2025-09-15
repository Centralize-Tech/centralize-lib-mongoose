import { Connection, Schema } from 'mongoose';
import { IProductType } from '../../types';
export declare const productShopifySchema: Schema<IProductType, import("mongoose").Model<IProductType, any, any, any, import("mongoose").Document<unknown, any, IProductType, any, {}> & IProductType & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, IProductType, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<IProductType>, {}, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & import("mongoose").FlatRecord<IProductType> & Required<{
    _id: unknown;
}> & {
    __v: number;
}>;
export declare function createProductShopifyModel(conn: Connection): import("mongoose").Model<IProductType, {}, {}, {}, import("mongoose").Document<unknown, {}, IProductType, {}, {}> & IProductType & Required<{
    _id: unknown;
}> & {
    __v: number;
}, Schema<IProductType, import("mongoose").Model<IProductType, any, any, any, import("mongoose").Document<unknown, any, IProductType, any, {}> & IProductType & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, IProductType, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<IProductType>, {}, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & import("mongoose").FlatRecord<IProductType> & Required<{
    _id: unknown;
}> & {
    __v: number;
}>>;
