import { Schema, model, Model } from 'mongoose'
import { UserInterface } from '../interfaces/User'



const UserSchema = new Schema({
  firstName: String,
  lastName: String,
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address'],
  }
}, {
    timestamps: { createdAt: true, updatedAt: true },
    toJSON: { 
        virtuals: true,
        transform(doc, ret) {
            ret.id = ret._id
            delete ret._id
          }
    },
    versionKey: false,
})



export const User: Model<UserModel> = model<UserModel>('User', UserSchema)