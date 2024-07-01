import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    background-color: #e9ecef;
    color: #333;
  }

  #root {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    height: 100vh;
    padding: 20px;
  }
`;

export default GlobalStyles;
