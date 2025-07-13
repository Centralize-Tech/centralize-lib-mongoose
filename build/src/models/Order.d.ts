import { Connection } from 'mongoose';
import { IOrder } from '../types';
export declare function orderModel(conn: Connection): import("mongoose").Model<IOrder, {}, {}, {}, import("mongoose").Document<unknown, {}, IOrder> & IOrder & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>;
