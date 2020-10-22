import React, { useEffect, useState } from 'react';
import { useRouteMatch } from 'react-router-dom';

import { Container, Content, ItemsContainer, ProductInfo } from './styles';
import Navbar from '../../components/Navbar';
import BuyButton from '../../components/BuyButton';

interface ProductParams {
  product: string;
}

interface ProductInterface {
  _id?: string;
  product?: string;
  brand?: string;
  category?: string;
  price?: number;
  inStock?: number;
  description?: string;
  image?: string;
  productName?: string;
}

const Product: React.FC = () => {
  const { params } = useRouteMatch<ProductParams>();

  const [product, setProduct] = useState<ProductInterface>({});
  const [imagePath, setImagePath] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    fetch(
      `http://localhost:3333/products/list-product-by-name/${params.product}`,
    )
      .then((response) => response.json())
      .then((result) => {
        setProduct(result);
        if (product.image) {
          setImagePath(`http://localhost:3333/files/${product.image}`);
        }
      })
      .catch((err) => {
        setError(err);
      });
  }, [params, product.image]);

  return (
    <Container>
      <Navbar />
      <Content>
        <ItemsContainer>
          <ProductInfo>
            {error}
            <img src={imagePath} alt={product.image} />
            <div>
              <span id="product-name">{product.product}</span>
              {product.inStock ? (
                <span id="available">Product Available</span>
              ) : (
                <span id="unavailable">Product Unavailable</span>
              )}
              <div>
                <span id="price">
                  US$
                  {product.price}
                </span>
                <BuyButton id="buy">Buy</BuyButton>
              </div>
            </div>
          </ProductInfo>
        </ItemsContainer>
      </Content>
    </Container>
  );
};

export default Product;
