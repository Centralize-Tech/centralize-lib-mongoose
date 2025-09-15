import { Connection, Schema } from 'mongoose'
import { IProductType } from '../../types'

export const productShopifySchema = new Schema<IProductType>(
  {
    id: { type: String, required: true },
    title: { type: String, required: true },
    handle: { type: String, required: true },
    description: { type: String, required: true },
    status: { type: String, required: true },
    vendor: { type: String, required: true },
    productType: { type: String, required: true },
    tags: { type: String, required: true },
    createdAt: { type: Date, required: true },
    updatedAt: { type: Date, required: true },
    images: [{ type: Object, required: true }],
    variants: [{ type: Object, required: true }]
  },
  { timestamps: true }
)

export function createProductShopifyModel(conn: Connection) {
  return conn.model('Product', productShopifySchema)
}
