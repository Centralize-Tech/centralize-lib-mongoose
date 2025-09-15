import { Connection } from 'mongoose';
import { IEnterprise } from '../types';
export declare function createEnterpriseModel(conn: Connection): import("mongoose").Model<IEnterprise, {}, {}, {}, import("mongoose").Document<unknown, {}, IEnterprise, {}, {}> & IEnterprise & Required<{
    _id: string;
}> & {
    __v: number;
}, any>;
