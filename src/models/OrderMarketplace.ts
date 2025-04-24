import { Schema, Connection } from 'mongoose';

import { IOrderMarketplace } from '../types';

export const orderMarketplaceSchema = new Schema<IOrderMarketplace>({
  enterpriseId: { type: String, required: true },
  marketplace: { type: String, required: true },
  orderId: { type: String, required: true },
  orderCreateDate: { type: Date, required: false, default: null },
  orderUpdateDate: { type: Date, required: false, default: null },
  status: { type: String, required: true },
  totalAmount: { type: String, required: true },
  buyer: {
    id: { type: String, required: true },
    name: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: false, default: null },
    documentNumber: { type: String, required: false, default: null },
    documentType: { type: String, required: false, default: null },
    address: { type: Object, required: false, default: {} },
  },
  productsQuantity: { type: String, required: false, default: null },
  products: [
    {
      id: { type: String, required: true },
      name: { type: String, required: true },
      sku: { type: String, required: true },
      quantity: { type: Number, required: true },
      unitPrice: { type: Number, required: true },
      totalPrice: { type: Number, required: true },
      productShopSku: { type: String, required: false, default: null },
      shippingFrom: { type: Object, required: false, default: {} },
      shippingPrice: { type: Number, required: false, default: 0 },
      commission: { type: Number, required: false, default: 0 },
    }
  ],
  businessInvoice: { type: Object, required: false, default: {} },
  payment: {
    status: { type: String, required: true },
    paymentMethod: { type: String, required: true },
    currency: { type: String, required: true },
    totalPaid: { type: Schema.Types.Mixed, required: true },
  },
  shipping: {
    tracking: { type: String, required: false, default: null },
    method: { type: String, required: false, default: null },
    address: { type: String, required: true },
    status: { type: String, required: true },
    trackingNumber: { type: String, required: false, default: null },
    shippingCompany: { type: String, required: false, default: null },
    shippingCost: { type: Number, required: true, default: 0 },
    url: { type: String, required: false, default: null },
  },
  notes: { type: String, required: false, default: null },
  orderNumber: { type: String, required: false, default: null },
}, { timestamps: true });

export function createOrderMarketplaceModel(conn: Connection) {
  return conn.model<IOrderMarketplace>('OrderMarketplace', orderMarketplaceSchema);
}
