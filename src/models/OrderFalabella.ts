import { Schema, Connection } from 'mongoose';

import { IOrderFalabella, IProduct } from '../types';

export const orderFalabellaSchema = new Schema<IOrderFalabella>({
  enterpriseId: { type: String, required: true },
  marketplace: { type: String, required: true },
  orderId: { type: String, required: true },
  status: { type: String, required: true },
  totalAmount: { type: String, required: true },
  buyer: {
    id: { type: String, required: true },
    name: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
  },
  productsQuantity: { type: String, required: true },
  products: [
    {
      id: { type: String, required: true },
      name: { type: String, required: true },
      sku: { type: String, required: true },
      quantity: { type: Number, required: true },
      unitPrice: { type: Number, required: true },
      totalPrice: { type: Number, required: true },
    }
  ],
  payment: {
    status: { type: String, required: true },
    paymentMethod: { type: String, required: true },
    currency: { type: String, required: true },
    totalPaid: { type: Schema.Types.Mixed, required: true },
  },
  shipping: {
    address: { type: String, required: true },
    status: { type: String, required: true },
  },
  notes: { type: String, required: true },
  orderNumber: { type: String, required: true },
}, { timestamps: true });

export function createOrderFalabellaModel(conn: Connection) {
  return conn.model<IOrderFalabella>('OrderFalabella', orderFalabellaSchema);
}
