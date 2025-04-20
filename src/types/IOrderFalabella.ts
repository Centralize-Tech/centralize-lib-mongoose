import { Document } from 'mongoose';

export interface IOrderFalabella extends Document {
  enterpriseId: string,
  marketplace: string,
  orderId: string,
  status: string,
  totalAmount: string,
  buyer: IBuyer,
  productsQuantity: string,
  products: Array<IProduct>,
  payment: IPayment,
  shipping: IShipping,
  notes: string,
  orderNumber: string
}

interface IBuyer {
  id: string,
  name: string,
  lastName: string,
  email: string,
  phone: string
}

export interface IProduct {
  id: string,
  name: string,
  sku: string,
  quantity: number,
  unitPrice: number,
  totalPrice: number
}

interface IPayment {
  status: string,
  paymentMethod: string,
  currency: string,
  totalPaid: number | string | null
}

interface IShipping {
  address: string,
  status: string
}
