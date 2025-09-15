import { Schema, Connection } from 'mongoose';
import { IUserFalabella } from '../../types/Falabella/IUserFalabella';
export declare const userFalabellaSchema: Schema<IUserFalabella, import("mongoose").Model<IUserFalabella, any, any, any, import("mongoose").Document<unknown, any, IUserFalabella, any, {}> & IUserFalabella & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, IUserFalabella, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<IUserFalabella>, {}, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & import("mongoose").FlatRecord<IUserFalabella> & Required<{
    _id: unknown;
}> & {
    __v: number;
}>;
export declare function createUserFalabellaModel(conn: Connection): import("mongoose").Model<IUserFalabella, {}, {}, {}, import("mongoose").Document<unknown, {}, IUserFalabella, {}, {}> & IUserFalabella & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>;
