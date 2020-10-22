import styled from 'styled-components';
import { lighten } from 'polished';

export const Container = styled.div`
  button {
    background: #24ad33;
    color: #fff;
    font-size: 1.2em;
    font-weight: bold;
    width: 100px;
    border: 1px solid #0f0f0f;
    border-radius: 3px;
    transition: background-color 0.3s;

    margin-bottom: 0.6em;

    &:hover {
      background-color: ${lighten(0.06, '#24ad33')};
    }
  }
`;
