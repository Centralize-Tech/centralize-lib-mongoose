import { Schema, Connection } from 'mongoose';
import { IUserParis } from '../../types/Paris/IUserParis';
export declare const userParisSchema: Schema<IUserParis, import("mongoose").Model<IUserParis, any, any, any, import("mongoose").Document<unknown, any, IUserParis, any, {}> & IUserParis & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, IUserParis, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<IUserParis>, {}, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & import("mongoose").FlatRecord<IUserParis> & Required<{
    _id: unknown;
}> & {
    __v: number;
}>;
export declare function createUserParisModel(conn: Connection): import("mongoose").Model<IUserParis, {}, {}, {}, import("mongoose").Document<unknown, {}, IUserParis, {}, {}> & IUserParis & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>;
