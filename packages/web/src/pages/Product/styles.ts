import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ItemsContainer = styled.div`
  display: flex;
  width: 85%;
  height: 100%;
  background: var(--primary);
  min-width: 500px;

  box-shadow: 0px 0px 16px 0px #171717;
  border-radius: 12px;

  margin: 2em;
`;

export const ProductInfo = styled.div`
  display: flex;
  margin: 3em;
  background-color: #fff;
  border: 2px solid #6c6c75;
  border-radius: 5px;

  @media (max-width: 1030px) {
    display: flex;
    flex-direction: column;
  }

  > div {
    display: flex;
    flex-direction: column;
    justify-content: center;

    div {
      display: flex;
      justify-content: space-evenly;
    }
  }

  #product-name {
    display: block;
    font-size: 1.5rem;
    margin: 0.5em 1em 0 0.5em;
  }

  #available {
    display: block;
    color: #24ad33;
    font-size: 1.5rem;
    font-weight: bold;
    margin: 1.5em 1em 0 0.5em;
  }

  #unavailable {
    display: block;
    color: var(--error);
    font-size: 1.5rem;
    font-weight: bold;
    margin: 1.5em 1em 0 0.5em;
  }

  #price {
    color: #24ad33;
    font-size: 1.5rem;
    font-weight: bold;
    margin: 4em 1em 0 0.5em;

    @media (max-width: 1030px) {
      margin: 4em 1em 1em 0.5em;
    }
  }

  #buy {
    font-size: 1.5rem;
    margin: 4em 0.5em 0 1em;

    @media (max-width: 1030px) {
      margin: 4em 0.5em 1em 1em;
    }
  }

  img {
    width: 380px;
    height: 360px;
    margin: 1em;

    @media (max-width: 1030px) {
      margin-left: auto;
      margin-right: auto;
    }
  }
`;
