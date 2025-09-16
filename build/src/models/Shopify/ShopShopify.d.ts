import { Connection, Schema } from 'mongoose';
import { IShopType } from '../../types';
export declare const shopShopifySchema: Schema<IShopType, import("mongoose").Model<IShopType, any, any, any, import("mongoose").Document<unknown, any, IShopType, any, {}> & IShopType & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, IShopType, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<IShopType>, {}, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & import("mongoose").FlatRecord<IShopType> & Required<{
    _id: unknown;
}> & {
    __v: number;
}>;
export declare function createShopShopifyModel(conn: Connection): import("mongoose").Model<IShopType, {}, {}, {}, import("mongoose").Document<unknown, {}, IShopType, {}, {}> & IShopType & Required<{
    _id: unknown;
}> & {
    __v: number;
}, Schema<IShopType, import("mongoose").Model<IShopType, any, any, any, import("mongoose").Document<unknown, any, IShopType, any, {}> & IShopType & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, IShopType, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<IShopType>, {}, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & import("mongoose").FlatRecord<IShopType> & Required<{
    _id: unknown;
}> & {
    __v: number;
}>>;
