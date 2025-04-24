import { Document } from 'mongoose';

export interface IOrderMarketplace extends Document {
  enterpriseId: string,
  marketplace: string,
  orderId: string,
  orderCreateDate?: Date,
  orderUpdateDate?: Date,
  status: string,
  totalAmount: string,
  buyer: IBuyer,
  productsQuantity?: string,
  products: Array<IProduct>,
  businessInvoice?: Object,
  payment: IPayment,
  shipping: IShipping,
  notes?: string,
  orderNumber?: string
}

interface IBuyer {
  id: string,
  name: string,
  lastName: string,
  email: string,
  phone?: string,
  documentNumber?: string,
  documentType?: string,
  address?: Object
}

export interface IProduct {
  id: string,
  name: string,
  sku: string,
  quantity: number,
  unitPrice: number,
  totalPrice: number,
  productShopSku?: string,
  shippingFrom?: Object,
  shippingPrice?: number,
  commission?: number
}

interface IPayment {
  status: string,
  paymentMethod: string,
  currency: string,
  totalPaid: number | string | null
}

interface IShipping {
  tracking?: string,
  method?: string,
  address: string,
  status: string,
  trackingNumber?: string,
  shippingCompany?: string,
  shippingCost: number,
  url?: string
}
