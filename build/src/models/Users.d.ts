import { Connection } from 'mongoose';
import { IUsers } from '../types';
export declare function usersModel(conn: Connection): import("mongoose").Model<IUsers, {}, {}, {}, import("mongoose").Document<unknown, {}, IUsers, {}, {}> & IUsers & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>;
