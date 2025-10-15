import { Document } from 'mongoose'

export interface IProductMeli extends Document {
  id: string
  title: string
  seller_id: number
  category_id: string
  price: number
  base_price: number
  currency_id: string
  initial_quantity: number
  available_quantity: number
  sold_quantity: number
  sale_terms: ISaleTerm[]
  buying_mode: string
  listing_type_id: string
  start_time: Date
  stop_time: Date
  end_time: Date
  expiration_time: Date
  condition: string
  permalink: string
  thumbnail_id: string
  thumbnail: string
  pictures: IPicture[]
  descriptions: any[]
  accepts_mercadopago: boolean
  international_delivery_mode: string
  attributes: IAttribute[]
  listing_source: string
  variations: IVariation[]
  status: string
  tags: string[]
  warranty: string
  domain_id: string
  automatic_relist: boolean
  date_created: Date
  last_updated: Date
}

interface IAttribute {
  id: string
  name: string
  value_id: null | string
  value_name: string
  values: IValue[]
  value_type: string
}
interface IValue {
  id: null | string
  name: string
  struct: IStruct | null
}

interface IStruct {
  number: number
  unit: string
}

interface IPicture {
  id: string
  url: string
  secure_url: string
  size: string
  max_size: string
  quality: string
}

interface ISaleTerm {
  id: string
  name: string
  value_id: null | string
  value_name: string
  value_struct: IStruct | null
  values: IValue[]
  value_type: string
}

interface IVariation {
  id: number
  price: number
  attribute_combinations: IAttribute[]
  available_quantity: number
  sold_quantity: number
  sale_terms: any[]
  picture_ids: string[]
  seller_custom_field: null
  catalog_product_id: null
  inventory_id: null
  item_relations: any[]
  user_product_id: string
}
