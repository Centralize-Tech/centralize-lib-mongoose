import { Schema, Connection } from 'mongoose';
import { IOrderParis } from '../../types/Paris/IOrderParis';
export declare const orderParisSchema: Schema<IOrderParis, import("mongoose").Model<IOrderParis, any, any, any, import("mongoose").Document<unknown, any, IOrderParis, any, {}> & IOrderParis & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, IOrderParis, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<IOrderParis>, {}, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & import("mongoose").FlatRecord<IOrderParis> & Required<{
    _id: unknown;
}> & {
    __v: number;
}>;
export declare function createOrderParisModel(conn: Connection): import("mongoose").Model<IOrderParis, {}, {}, {}, import("mongoose").Document<unknown, {}, IOrderParis, {}, {}> & IOrderParis & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>;
