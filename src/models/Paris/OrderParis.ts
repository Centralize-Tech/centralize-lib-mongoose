import { Schema, Connection, Types } from 'mongoose';

import { IOrderParis } from '../../types/Paris/IOrderParis';

export const orderParisSchema = new Schema<IOrderParis>({
  billingAddress: { type: Object, required: true },
  businessInvoice: { type: Object, required: true },
  createdAt: { type: String, required: true },
  customer: { type: Object, required: true },
  enterpriseId: { type: String, required: true },
  id: { type: String, required: true },
  origin: { type: String, required: true },
  originInvoiceType: { type: String, required: true },
  originOrderDate: { type: String, required: true },
  originOrderNumber: { type: String, required: true },
  subOrderNumber: { type: String, required: true },
  subOrders: [{ type: Object, required: true }],
  users: { type: Types.ObjectId, ref: 'users' },
}, { timestamps: true });

export function createOrderParisModel(conn: Connection) {
  return conn.model<IOrderParis>('Orders', orderParisSchema);
};
