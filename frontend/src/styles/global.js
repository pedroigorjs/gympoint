import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    line-height: 1.5;
  }

  body, input, button {
    font: 1rem 'Roboto', sans-serif;
  }
`;
