import Product, { ProductDocument } from '../schemas/Product';
import User from '../schemas/User';
import AppError from '../errors/AppError';

interface Request {
  product: string;
  price: number;
  category: string;
  brand: string;
  inStock: number;
  description: string;
  image: string;
  _id: string;
}

class CreateProductService {
  public async execute({
    product,
    price,
    category,
    brand,
    inStock,
    description,
    image,
    _id,
  }: Request): Promise<ProductDocument> {
    const user = await User.findOne({
      _id,
    });

    if (!user?.hasAdmin) {
      throw new AppError('No admin permission');
    }

    const name = product.split(/[,/ ]/).join('-');

    const products = Product.create({
      product,
      price,
      category,
      brand,
      inStock,
      description,
      image,
      productName: name.toLowerCase(),
    });

    return products;
  }
}

export default CreateProductService;
