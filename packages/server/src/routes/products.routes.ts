import { Router } from 'express';
import multer from 'multer';

import Product from '../schemas/Product';
import secureAuth from '../middlewares/secureAuth';
import uploadConfig from '../config/upload';
import CreateProductService from '../services/CreateProductService';

const productsRouter = Router();
const upload = multer(uploadConfig);

// List Products
productsRouter.get('/list-products', async (request, response) => {
  try {
    const products = await Product.find({});

    return response.json(products);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

// List Product by ID
productsRouter.get('/list-product-by-id/:_id', async (request, response) => {
  try {
    const { params } = request;
    const product = await Product.findOne({ _id: params });

    return response.json(product);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

// List Product by Name
productsRouter.get(
  '/list-product-by-name/:productName',
  async (request, response) => {
    try {
      const name = request.params.productName;
      const product = await Product.findOne({ productName: name });

      return response.json(product);
    } catch (err) {
      return response.status(400).json({ error: err.message });
    }
  },
);

// Create Product
productsRouter.post(
  '/create-product',
  secureAuth,
  upload.single('image'),
  async (request, response) => {
    try {
      const {
        product,
        price,
        category,
        brand,
        inStock,
        description,
      } = request.body;

      const createNewProduct = new CreateProductService();

      const products = await createNewProduct.execute({
        _id: request.user.id,
        product,
        price,
        category,
        brand,
        inStock,
        description,
        image: request.file.filename,
      });

      return response.json(products);
    } catch (err) {
      return response.status(400).json({ error: err.message });
    }
  },
);

export default productsRouter;
