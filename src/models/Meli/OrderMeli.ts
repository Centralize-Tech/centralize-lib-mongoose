import { Connection, Schema } from 'mongoose'
import { IOrderMELI } from '../../types'

export const orderMeliSchema = new Schema<IOrderMELI>(
  {
    id: { type: Number, required: true },
    date_created: { type: Date },
    last_updated: { type: Date },
    date_closed: { type: Date },
    pack_id: { type: Number },
    buying_mode: { type: String },
    total_amount: { type: Number },
    paid_amount: { type: Number },
    order_items: [{ type: Object }],
    currency_id: { type: String },
    payments: [{ type: Object }],
    shipping: { type: Object },
    status: { type: String },
    tags: [{ type: String }],
    internal_tags: [{ type: String }],
    static_tags: [{ type: String }],
    feedback: { type: Object },
    seller: { type: Object },
    buyer: { type: Object },
    cancel_detail: { type: Object },
    order_request: { type: Object },
    order_last_updated: { type: Date },
    shipping_last_updated: { type: Date },
    enterprise_id: { type: String, required: true }
  },
  {
    timestamps: true
  }
)

export function createOrderMeliModel(conn: Connection) {
  return conn.model('Order', orderMeliSchema)
}
