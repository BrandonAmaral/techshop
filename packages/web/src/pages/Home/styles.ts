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

  box-shadow: 0px 0px 16px 0px #171717;
  border-radius: 12px;

  margin: 2em;
`;

export const Products = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 2fr);
  grid-gap: 1em;
  width: 100%;
  height: 100%;
  margin: 3em;

  @media (max-width: 1300px) {
    grid-template-columns: repeat(3, 2fr);
  }

  @media (max-width: 1000px) {
    grid-template-columns: repeat(2, 2fr);
  }

  @media (max-width: 700px) {
    grid-template-columns: repeat(1, 2fr);
  }

  > div {
    background-color: #fff;
    border: 2px solid #6c6c75;
    border-radius: 5px;
    transition: border-color 0.3s;

    &:hover {
      border-color: #1f15eb;
    }

    #price {
      display: block;
      font-weight: bold;
      margin: 1.5em 0.3em 0.8em 0.3em;
      text-align: center;
      color: #24ad33;
    }

    #title {
      display: block;
      color: black;
      font-weight: bold;
      margin: 0.5em 0.3em 0em 0.3em;
      text-align: center;

      overflow: hidden;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;

      a {
        text-decoration: none;
        color: black;
        font-weight: bold;
      }
    }

    img {
      display: block;
      border-radius: 5px;
      margin-left: auto;
      margin-right: auto;
      width: 200px;
      height: 180px;
    }
  }
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: space-evenly;
`;
