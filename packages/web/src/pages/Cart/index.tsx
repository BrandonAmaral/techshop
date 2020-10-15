import React from 'react';

import { Container, Content } from './styles';
import Navbar from '../../components/Navbar';

const Cart: React.FC = () => {
  return (
    <Container>
      <Content>
        <Navbar />
        <h1>Cart</h1>
      </Content>
    </Container>
  );
};

export default Cart;
