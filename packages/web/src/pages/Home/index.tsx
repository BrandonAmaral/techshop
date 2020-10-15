import React from 'react';

import { Container, Content } from './styles';
import Navbar from '../../components/Navbar';

const Home: React.FC = () => {
  return (
    <Container>
      <Content>
        <Navbar />
        <h1>Home</h1>
      </Content>
    </Container>
  );
};

export default Home;
