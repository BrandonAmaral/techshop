import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  background: var(--primary);

  width: 600px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  box-shadow: 0px 0px 16px 0px #171717;
  border-radius: 12px;

  margin: 0.5em;

  h1 {
    color: var(--font-color);
    margin-bottom: 0.5em;
    margin-top: 1em;
  }
`;
