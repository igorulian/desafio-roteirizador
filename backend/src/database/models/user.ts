import { Document, Schema, model } from 'mongoose'
import bcrypt from 'bcryptjs'

export interface ICoord {
  lat: number,
  lng: number
}

export interface IRoute {
  origin: ICoord,
  stops: ICoord[]
}

export interface IUser extends Document {
    username: string;
    email: string;
    password: string;
    createdAt: string;
    history: IRoute[]
}

export const coordScema: Schema = new Schema({
  lat: {
    type: Number,
    require: true
  },
  lng: {
    type: Number,
    require: true
  }
})

export const routeSchema:Schema = new Schema({
  origin: {
    type: coordScema,
    require: true
  },
  stops: {
    type: [coordScema],
    required: true
  }
})

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
  history: {
    type: [routeSchema],
    default: []
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
