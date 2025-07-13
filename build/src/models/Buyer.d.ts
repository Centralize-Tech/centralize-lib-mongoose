import { Connection } from 'mongoose';
import { IBuyer } from '../types';
export declare function createBuyerModel(conn: Connection): import("mongoose").Model<IBuyer, {}, {}, {}, import("mongoose").Document<unknown, {}, IBuyer> & IBuyer & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>;
