import mongoose, { Document, Schema, Model } from 'mongoose';

export type UserAttributes = {
  product: string;
  price: number;
  category: string;
  brand: string;
  inStock: number;
  description: string;
  image: string;
  productName: string;
};

export type ProductDocument = Document & UserAttributes;

type ProductModel = Model<ProductDocument>;

const ProductSchema = new Schema(
  {
    product: {
      type: String,
      trim: true,
      required: true,
      unique: true,
    },
    price: {
      type: Number,
      trim: true,
      required: true,
    },
    category: {
      type: String,
      trim: true,
      required: true,
    },
    brand: {
      type: String,
      trim: true,
      required: true,
    },
    inStock: {
      type: Number,
      trim: true,
      default: 0,
      required: true,
    },
    description: {
      type: String,
      trim: true,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    productName: {
      type: String,
      required: true,
      unique: true,
    },
  },
  {
    timestamps: true,
    collection: 'products',
  },
);

export default mongoose.model<ProductDocument, ProductModel>(
  'Product',
  ProductSchema,
);
