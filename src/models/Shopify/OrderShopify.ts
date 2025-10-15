import { Connection, Schema } from 'mongoose'
import { IOrderShopify } from '../../types'

export const orderShopifySchema = new Schema<IOrderShopify>(
  {
    id: { type: Number, required: true },
    shop: { type: String, required: true },
    checkout_id: { type: Number, required: true },
    checkout_token: { type: String, required: true },
    created_at: { type: Date, required: true },
    updated_at: { type: Date, required: true },
    closed_at: { type: Date },
    cancelled_at: { type: Date },
    confirmation_number: { type: String, required: true },
    confirmed: { type: Boolean, required: true },
    currency: { type: String, required: true },
    order_number: { type: Number, required: true },
    processed_at: { type: Date, required: true },
    contact_email: { type: String },
    tax_exempt: { type: Boolean, required: true },
    total_tax: { type: String, required: true },
    subtotal_price: { type: String, required: true },
    billing_address: { type: Object, required: true },
    token: { type: String, required: true },
    company: { type: Object },
    discount_codes: [{ type: Object, required: true }],
    discount_applications: [{ type: Object, required: true }],
    financial_status: { type: String, required: true },
    phone: { type: String },
    total_weight: { type: Number, required: true },
    customer: { type: Object, required: true },
    shipping_address: { type: Object },
    payment_terms: { type: Object },
    total_outstanding: { type: String, required: true },
    total_price: { type: String, required: true },
    tracking: [{ type: Object }],
    refunds: [{ type: Object }]
  },
  { timestamps: true }
)

export function createOrderShopifyModel(conn: Connection) {
  return conn.model('Order', orderShopifySchema)
}
