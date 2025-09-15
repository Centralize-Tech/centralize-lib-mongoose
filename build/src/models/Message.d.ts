import { Schema, Connection } from 'mongoose';
import { IMessage } from '../types';
export declare const messageSchema: Schema<IMessage, import("mongoose").Model<IMessage, any, any, any, import("mongoose").Document<unknown, any, IMessage, any, {}> & IMessage & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, IMessage, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<IMessage>, {}, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & import("mongoose").FlatRecord<IMessage> & Required<{
    _id: unknown;
}> & {
    __v: number;
}>;
export declare function createMessageModel(conn: Connection): import("mongoose").Model<IMessage, {}, {}, {}, import("mongoose").Document<unknown, {}, IMessage, {}, {}> & IMessage & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>;
