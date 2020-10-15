import { Router } from 'express';
import multer from 'multer';

import secureAuth from '../middlewares/secureAuth';
import uploadConfig from '../config/upload';
import CreateProductService from '../services/CreateProductService';

const productsRouter = Router();
const upload = multer(uploadConfig);

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
