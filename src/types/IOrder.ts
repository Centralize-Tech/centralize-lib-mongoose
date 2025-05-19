import { Document } from 'mongoose';

import { IMarketplace } from './IEnterprise';

export interface IOrder extends Document {
  enterpriseId: string;
  marketplace: IMarketplace;
  orderId: string;
  createdDate: Date;
  updatedDate?: Date;
  status: string;
  totalAmount?: number | null;
  buyer: IBuyerOrder;
  products: Array<IOrderProduct>;
  payment: IPayment;
  shipping: IShipping;
  notes?: string;
}

export interface IBuyerOrder {
  id: string;
  name: string;
  lastName: string;
  email?: string;
  phone?: string;
};

export interface IOrderProduct {
  id: string;
  name: string;
  sku?: string;
  quantity: number;
  unitPrice: number;
  totalPrice: number;
};

export interface IPayment {
  status: string;
  paymentMethod: string;
  currency: string;
  totalPaid: number | string | null;
};

export interface IShipping {
  method?: string;
  address: string;
  trackingNumber?: string;
  status: string;
  deliveryInstructions?: string;
};
