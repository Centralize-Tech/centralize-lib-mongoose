import { Schema, Connection } from 'mongoose';
import { IUserCentralize } from '../../types/Centralize/IUserCentralize';
export declare const userCentralizeSchema: Schema<IUserCentralize, import("mongoose").Model<IUserCentralize, any, any, any, import("mongoose").Document<unknown, any, IUserCentralize, any, {}> & IUserCentralize & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, IUserCentralize, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<IUserCentralize>, {}, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & import("mongoose").FlatRecord<IUserCentralize> & Required<{
    _id: unknown;
}> & {
    __v: number;
}>;
export declare function createUserCentralizeModel(conn: Connection): import("mongoose").Model<IUserCentralize, {}, {}, {}, import("mongoose").Document<unknown, {}, IUserCentralize, {}, {}> & IUserCentralize & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>;
