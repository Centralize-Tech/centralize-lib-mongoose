import { Connection, Schema, Types } from 'mongoose';

import { IOrder } from '../types';

const orderSchema = new Schema<IOrder>({
  enterpriseId: { type: String, required: true },
  marketplace: { type: String, required: true },
  orderId: { type: String, required: true, unique: true },
  status: { type: String, required: true },
  buyer: { type: Object, required: true },
  products: { type: [], required: true },
  payment: { type: Object, required: true },
  shipping: { type: Object, required: true },
  notes: { type: String },
  users: { type: Types.ObjectId, ref: 'users' },
}, { timestamps: true });

export function orderModel(conn: Connection) {
  return conn.model<IOrder>('orders', orderSchema);
}
