import { Schema, Connection } from 'mongoose';
import { IEnterpriseCentralize } from '../../types/Centralize/IEnterpriseCentralize';
export declare const enterpriseCentralizeSchema: Schema<IEnterpriseCentralize, import("mongoose").Model<IEnterpriseCentralize, any, any, any, import("mongoose").Document<unknown, any, IEnterpriseCentralize, any, {}> & IEnterpriseCentralize & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, IEnterpriseCentralize, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<IEnterpriseCentralize>, {}, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & import("mongoose").FlatRecord<IEnterpriseCentralize> & Required<{
    _id: unknown;
}> & {
    __v: number;
}>;
export declare function createEnterpriseCentralizeModel(conn: Connection): import("mongoose").Model<IEnterpriseCentralize, {}, {}, {}, import("mongoose").Document<unknown, {}, IEnterpriseCentralize, {}, {}> & IEnterpriseCentralize & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>;
