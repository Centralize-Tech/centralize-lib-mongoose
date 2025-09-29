import { Document } from 'mongoose'

export interface IOrderShopify extends Document {
  id: number
  shop: string
  checkout_id: number
  checkout_token: string
  created_at: Date
  updated_at: Date | null
  closed_at: Date | null
  cancelled_at: Date | null
  confirmation_number: string
  confirmed: boolean
  currency: string
  order_number: number
  processed_at: Date
  contact_email: string
  tax_exempt: boolean
  total_tax: string
  subtotal_price: string
  billing_address: IBillingAddress
  token: string
  company: any | null
  discount_codes: IDiscountCode[]
  discount_applications: IDiscountApplications[]
  financial_status: string
  phone: string
  total_weight: number
  customer: ICustomer
  shipping_address: IShippingAddress
  payment_terms: IPaymentTerms | null
  total_outstanding: string
  total_price: string
  tracking: ITrackingShopify[]
  refunds: IRefundShopify[]
}

interface IDiscountCode {
  code: string
  amount: string
  type: string
}

interface IDiscountApplications {
  target_type: string
  type: string
  value: string
  value_type: string
  allocation_method: string
  target_selection: string
  code: string
}

interface IBillingAddress {
  first_name: string
  address1: string
  phone: string
  city: string
  zip: string
  province: string
  country: string
  last_name: string
  address2: string
  company: string
  latitude: number
  longitude: number
  name: string
  country_code: string
  province_code: string
}

interface ICustomer {
  id: number
  created_at: Date
  updated_at: Date
  first_name: string
  last_name: string
  state: string
  note: string
  verified_email: boolean
  multipass_identifier: any
  tax_exempt: boolean
  phone: string
  currency: string
  tax_exemptions: any[]
  default_addres: ICustomerAddress
}

interface ICustomerAddress {
  id: number
  customer_id: number
  first_name: string
  last_name: string
  company: string
  address1: string
  address2: string
  city: string
  province: string
  country: string
  zip: string
  phone: string
  name: string
  province_code: string
  country_code: string
  country_name: string
  default: boolean
}

interface IShippingAddress {
  first_name: string
  address1: string
  phone: string
  city: string
  zip: string
  province: string
  country: string
  last_name: string
  address2: string
  company: string
  latitude: number
  longitude: number
  name: string
  country_code: string
  province_code: string
}

interface IPaymentTerms {
  id: number
  created_at: Date
  due_in_days: number | null
  payment_schedule: IPaymentSchedule[]
  payment_terms_name: string
  payment_terms_type: string
  updated_at: Date
}

interface IPaymentSchedule {
  id: number
  amount: string
  currency: string
  issued_at: Date
  due_at: Date
  completed_at: Date | null
  created_at: Date
  updated_at: Date
}

interface IPriceSet {
  shop_money: IPriceMoney[]
  presentment_money: IPriceMoney[]
}

interface IPriceMoney {
  amount: string
  currency: string
}

// TRACKING
interface ITrackingShopify {
  id: number
  created_at: Date
  location_id: number
  name: string
  order_id: number
  origin_address: {}
  receipt: {}
  service: string
  shipment_status: any
  status: string
  tracking_company: string
  tracking_number: string
  tracking_numbers: string[]
  tracking_url: string
  tracking_urls: string[]
  update_at: Date
  line_items: any[]
}

// REFUND
interface IRefundShopify {
  id: number
  created_at: Date
  note: string
  order_id: number
  processed_at: Date
  restock: boolean
  total_duties_set: IPriceSet
  user_id: number
  refund_line_items: IRefundLineItem[]
}

interface IRefundLineItem {
  id: number
  current_quantity: number
  fulfillment_quantity: number
  fulfillment_service: string
  fulfillment_status: any
  grams: number
  product_exists: boolean
  product_id: number
  quantity: number
  requires_shipping: boolean
  sku: string
  variant_id: number
}
