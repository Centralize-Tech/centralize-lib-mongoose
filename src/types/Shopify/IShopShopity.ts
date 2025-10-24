import { Document } from 'mongoose'

export interface IShopType extends Document {
  id: string
  shop: string
  token: string
  scopes: string
  enterprise_id: string
}
