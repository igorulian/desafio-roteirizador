import { Document, Schema, model } from 'mongoose'
import bcrypt from 'bcryptjs'

export interface IUser extends Document {
    username: string;
    email: string;
    password: string;
    createdAt: string;
}

export const userSchema:Schema = new Schema({
  username: {
    type: String,
    require: true
  },
  email: {
    type: String,
    require: true,
    lowercase: true,
    select: false
  },
  password: {
    type: String,
    required: true,
    select: false
  },
  createdAt: {
    type: Date,
    default: Date.now,
    select: false
  }
})

userSchema.pre('save', async function (this:IUser, next) {
  const hash = await bcrypt.hash(this.password, 10)
  this.password = hash
  next()
})

export const UserModel = model<IUser>('User', userSchema)
