import { Document } from 'mongoose'

export interface IAuthMeli extends Document {
  access_token: string
  token_type: string
  expires_in: number
  scope: string
  user: IAuthUser
  refresh_token: string
  token_create: Date
  enterprise_id: string
}

export interface IAuthUser {
  id: number
  nickname: string
  registration_date: Date
  first_name: string
  last_name: string
  gender: string
  country_id: string
  email: string
  identification: IUserIdentity
  address: IUserAddress
  phone: IUserPhone
}

interface IUserIdentity {
  number: string
  type: string
}

interface IUserAddress {
  address: string
  city: string
  state: string
  zip_code: string | null
}

interface IUserPhone {
  area_code: string
  extension: string
  number: string
  verified: boolean
}
