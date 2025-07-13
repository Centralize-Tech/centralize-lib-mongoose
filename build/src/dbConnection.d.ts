import { Connection } from 'mongoose';
export declare function getConnection(marketplace: string): Connection;
export declare function getConnectionAsync(marketplace: string): Promise<Connection>;
