import React, { LabelHTMLAttributes } from 'react';

import { Container } from './styles';

type ButtonProps = LabelHTMLAttributes<HTMLLabelElement>;

const Label: React.FC<ButtonProps> = (props) => (
  <Container>
    <label {...props} />
  </Container>
);

export default Label;
