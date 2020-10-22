import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import {
  Container,
  Content,
  ItemsContainer,
  Products,
  Buttons,
} from './styles';
import BuyButton from '../../components/BuyButton';
import DetailButton from '../../components/DetailButton';
import Navbar from '../../components/Navbar';

interface ProductsInterface {
  _id: string;
  product: string;
  brand: string;
  category: string;
  price: number;
  inStock: number;
  description: string;
  image: string;
  productName: string;
}

const Home: React.FC = () => {
  const [products, setProducts] = useState<ProductsInterface[]>([]);
  const [error, setError] = useState('');

  useEffect(() => {
    fetch('http://localhost:3333/products/list-products')
      .then((response) => response.json())
      .then((result) => {
        setProducts(result);
      })
      .catch((err) => {
        setError(err);
      });
  }, []);

  const filesDir = 'http://localhost:3333/files';

  return (
    <Container>
      <Navbar />
      <Content>
        <ItemsContainer>
          <Products>
            {error}
            {products.map((product) => (
              <div key={product._id}>
                <Link to={`/products/${product.productName}`}>
                  <img
                    src={`${filesDir}/${product.image}`}
                    alt={product.image}
                  />
                </Link>
                <span id="title">
                  <Link to={`/products/${product.productName}`}>
                    {product.product}
                  </Link>
                </span>
                <span id="price">
                  US$
                  {product.price}
                </span>
                <Buttons>
                  <BuyButton>Buy</BuyButton>
                  <Link to={`/products/${product.productName}`}>
                    <DetailButton>Detail</DetailButton>
                  </Link>
                </Buttons>
              </div>
            ))}
          </Products>
        </ItemsContainer>
      </Content>
    </Container>
  );
};

export default Home;
