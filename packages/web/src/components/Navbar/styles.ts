import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  height: 3em;
  background: #23262a;
  font-size: 1em;
  display: flex;
  align-items: center;
  justify-content: space-between;

  > a {
    display: flex;
    align-items: center;
    font-size: 1.5em;
    text-decoration: none;
    font-weight: bold;
    color: #fff;
    margin-left: 1em;

    &:hover {
      color: ${shade(0.3, '#fff')};
    }

    span {
      margin-left: 0.3em;
    }

    img {
      width: 40px;
      height: 40px;
    }
  }
`;

export const Nav = styled.nav`
  a {
    text-decoration: none;
    font-weight: bold;
    color: #fff;
    padding: 1rem;

    &:hover {
      color: ${shade(0.3, '#fff')};
    }

    &:last-child {
      margin-right: 1em;
    }
  }
`;
