import { Schema, model, Model, Document } from 'mongoose'
import { UserInterface } from '../interfaces/User'


export interface UserModel extends UserInterface, Document {

}
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
    
    versionKey: false,
})



export const User: Model<UserModel> = model<UserModel>('User', UserSchema)