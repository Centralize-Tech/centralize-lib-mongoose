import { Document } from 'mongoose'

export interface IAuthMeli extends Document {
  access_token: string
  token_type: string
  expires_in: number
  scope: string
  user_id: number
  refresh_token: string
}
