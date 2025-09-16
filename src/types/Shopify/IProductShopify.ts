import { Document } from 'mongoose'

export interface IProductType extends Document {
  id: string
  title: string
  handle: string
  description: string
  status: string
  vendor: string
  productType: string
  tags: string
  createdAt: Date
  updatedAt: Date
  images: IImageProduct[]
  variants: IVariant[]
}

interface IImageProduct {
  id: string
  url: string
  altText: string
}

interface IVariant {
  id: string
  title: string
  price: string
  sku: string
  image: IImageVariant | null
  inventoryQuantity: number
}

interface IImageVariant {
  id: string
  url: string
  altText: string | null
}
