import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  button {
    background: var(--secondary);
    color: #fff;
    font-size: 1.2em;
    font-weight: bold;
    width: 20em;
    height: 2.5em;
    border: 1px solid #0f0f0f;
    border-radius: 5px;
    transition: background-color 0.3s;

    margin-top: 1.5em;
    margin-bottom: 2em;

    &:hover {
      background: ${shade(0.3, '#3129d6')};
    }
  }
`;
