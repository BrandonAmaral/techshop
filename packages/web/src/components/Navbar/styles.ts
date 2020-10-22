import styled from 'styled-components';

export const Container = styled.div`
  height: 3em;
  background: var(--primary);
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
    color: #e3e3e3;
    margin-left: 1em;
    transition: color 0.3s;

    &:hover {
      color: #2e26de;
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
    transition: color 0.3s;

    &:hover {
      color: #2e26de;
    }

    &:last-child {
      margin-right: 1em;
    }
  }
`;
