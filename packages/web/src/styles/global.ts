import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
    --primary: #23262a;
    --secondary: #3129d6;
    --font-color: #e3e3e3;
    --error: #c7182c;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    height: 100%;
    -webkit-font-smoothing: antialiased;
    background-color: #cccccc;
  }

  *, button, input {
    font-family: 'Roboto', sans-serif;

    border: 0;
    outline: 0;
  }

  button {
    cursor: pointer;
  }
`;
