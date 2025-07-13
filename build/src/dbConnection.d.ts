import { Connection } from 'mongoose';
export declare function getConnection(marketplace: string): Connection;
export declare function closeAllConnections(): Promise<void>;
export declare function isConnectionReady(marketplace: string): boolean;
export declare function executeWithConnection<T>(marketplace: string, operation: (connection: Connection) => Promise<T>, maxRetries?: number): Promise<T>;
