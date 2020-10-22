import styled from 'styled-components';

export const Container = styled.div`
  input {
    background: #292b2f;
    color: #e3e3e3;
    font-size: 1.2em;
    width: 20em;
    height: 2.2em;
    border: 1px solid #0f0f0f;
    border-radius: 5px;
    transition: border-color 0.3s;

    padding-left: 5px;

    &:focus {
      border-color: var(--secondary);
    }
  }
`;
