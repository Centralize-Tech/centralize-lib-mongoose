import { Connection, Schema } from 'mongoose';
import { IOrderMELI } from '../../types';
export declare const orderMeliSchema: Schema<IOrderMELI, import("mongoose").Model<IOrderMELI, any, any, any, import("mongoose").Document<unknown, any, IOrderMELI, any, {}> & IOrderMELI & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, IOrderMELI, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<IOrderMELI>, {}, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & import("mongoose").FlatRecord<IOrderMELI> & Required<{
    _id: unknown;
}> & {
    __v: number;
}>;
export declare function createOrderMeliModel(conn: Connection): import("mongoose").Model<IOrderMELI, {}, {}, {}, import("mongoose").Document<unknown, {}, IOrderMELI, {}, {}> & IOrderMELI & Required<{
    _id: unknown;
}> & {
    __v: number;
}, Schema<IOrderMELI, import("mongoose").Model<IOrderMELI, any, any, any, import("mongoose").Document<unknown, any, IOrderMELI, any, {}> & IOrderMELI & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, IOrderMELI, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<IOrderMELI>, {}, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & import("mongoose").FlatRecord<IOrderMELI> & Required<{
    _id: unknown;
}> & {
    __v: number;
}>>;
