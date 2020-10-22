import React, { ButtonHTMLAttributes } from 'react';

import { Container } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const BuyButton: React.FC<ButtonProps> = (props) => (
  <Container>
    <button type="button" {...props} />
  </Container>
);

export default BuyButton;
