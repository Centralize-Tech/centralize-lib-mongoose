import { Connection, Schema } from 'mongoose'
import { IProductType } from '../../types'

export const productShopifySchema = new Schema<IProductType>(
  {
    id: { type: Number, required: true },
    shop: { type: String, required: true },
    description: { type: String, required: true },
    created_at: { type: Date, required: true },
    handle: { type: String, required: true },
    product_type: { type: String, required: true },
    published_at: { type: Date },
    title: { type: String, required: true },
    updated_at: { type: Date, required: true },
    vendor: { type: String, required: true },
    status: { type: String, required: true },
    published_scope: { type: String, required: true },
    tags: { type: String, required: true },
    variants: [{ type: Object, required: true }],
    options: [{ type: Object, required: true }],
    images: [{ type: Object, required: true }],
    image: { type: Object, required: true },
    category: { type: Object, required: true }
  },
  { timestamps: true }
)

export function createProductShopifyModel(conn: Connection) {
  return conn.model('Product', productShopifySchema)
}
