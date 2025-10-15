import { Connection, Schema } from 'mongoose'
import { IAuthMeli } from '../../types'

export const authMeliSchema = new Schema<IAuthMeli>(
  {
    access_token: { type: String, reuquired: true },
    token_type: { type: String, required: true },
    expires_in: { type: Number, required: true },
    scope: { type: String, required: true },
    user: { type: Object, required: true },
    refresh_token: { type: String, required: true },
    token_create: { type: Date, required: true }
  },
  {
    timestamps: true
  }
)

export function createAuthMeliModel(conn: Connection) {
  return conn.model('Auth', authMeliSchema)
}
