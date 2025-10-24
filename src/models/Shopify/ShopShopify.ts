import { Connection, Schema } from 'mongoose'
import { IShopType } from '../../types'

export const shopShopifySchema = new Schema<IShopType>(
  {
    id: { type: String, required: true },
    shop: { type: String, required: true },
    token: { type: String, required: true },
    scopes: { type: String, required: true },
    enterprise_id: { type: String, required: true }
  },
  {
    timestamps: true
  }
)

export function createShopShopifyModel(conn: Connection) {
  return conn.model('Shop', shopShopifySchema)
}
