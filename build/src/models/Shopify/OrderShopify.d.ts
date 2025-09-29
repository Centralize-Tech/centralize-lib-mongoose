import { Connection, Schema } from 'mongoose';
import { IOrderShopify } from '../../types';
export declare const orderShopifySchema: Schema<IOrderShopify, import("mongoose").Model<IOrderShopify, any, any, any, import("mongoose").Document<unknown, any, IOrderShopify, any, {}> & IOrderShopify & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, IOrderShopify, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<IOrderShopify>, {}, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & import("mongoose").FlatRecord<IOrderShopify> & Required<{
    _id: unknown;
}> & {
    __v: number;
}>;
export declare function createOrderShopifyModel(conn: Connection): import("mongoose").Model<IOrderShopify, {}, {}, {}, import("mongoose").Document<unknown, {}, IOrderShopify, {}, {}> & IOrderShopify & Required<{
    _id: unknown;
}> & {
    __v: number;
}, Schema<IOrderShopify, import("mongoose").Model<IOrderShopify, any, any, any, import("mongoose").Document<unknown, any, IOrderShopify, any, {}> & IOrderShopify & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, IOrderShopify, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<IOrderShopify>, {}, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & import("mongoose").FlatRecord<IOrderShopify> & Required<{
    _id: unknown;
}> & {
    __v: number;
}>>;
