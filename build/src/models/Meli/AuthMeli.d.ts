import { Connection, Schema } from 'mongoose';
import { IAuthMeli } from '../../types';
export declare const authMeliSchema: Schema<IAuthMeli, import("mongoose").Model<IAuthMeli, any, any, any, import("mongoose").Document<unknown, any, IAuthMeli, any, {}> & IAuthMeli & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, IAuthMeli, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<IAuthMeli>, {}, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & import("mongoose").FlatRecord<IAuthMeli> & Required<{
    _id: unknown;
}> & {
    __v: number;
}>;
export declare function createAuthMeliModel(conn: Connection): import("mongoose").Model<IAuthMeli, {}, {}, {}, import("mongoose").Document<unknown, {}, IAuthMeli, {}, {}> & IAuthMeli & Required<{
    _id: unknown;
}> & {
    __v: number;
}, Schema<IAuthMeli, import("mongoose").Model<IAuthMeli, any, any, any, import("mongoose").Document<unknown, any, IAuthMeli, any, {}> & IAuthMeli & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, IAuthMeli, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<IAuthMeli>, {}, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & import("mongoose").FlatRecord<IAuthMeli> & Required<{
    _id: unknown;
}> & {
    __v: number;
}>>;
