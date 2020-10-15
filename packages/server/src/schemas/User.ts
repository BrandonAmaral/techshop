import mongoose, { Document, Schema, Model } from 'mongoose';

export type UserAttributes = {
  username: string;
  email: string;
  password: string;
  hasAdmin: boolean;
};

export type UserDocument = Document & UserAttributes;

type UserModel = Model<UserDocument>;

const UserSchema = new Schema(
  {
    username: {
      type: String,
      trim: true,
      required: true,
    },
    email: {
      type: String,
      lowercase: true,
      trim: true,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    hasAdmin: {
      type: Boolean,
      required: true,
    },
  },
  {
    timestamps: true,
    collection: 'users',
  },
);

export default mongoose.model<UserDocument, UserModel>('User', UserSchema);
