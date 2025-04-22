import { Schema, Connection } from 'mongoose';

import { IMessage } from '../types';

export const messageSchema = new Schema<IMessage>({
  orderId: { type: String, required: true },
  content: { type: Object, required: true },
  createdBy: { type: String, required: true },
  enterpriseId: { type: String, required: true },
}, { timestamps: true });

export function createMessageModel(conn: Connection) {
  return conn.model<IMessage>('Message', messageSchema);
}
