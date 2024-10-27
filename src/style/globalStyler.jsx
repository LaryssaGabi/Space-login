import { createGlobalStyle } from 'styled-components';
import Fundo from '../assets/fundo.jpg'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  a {
    text-decoration: none;
  }

  body {
    font-family: Arial, sans-serif; 
    background-image: url(${Fundo});
    background-size: cover;
    background-position: center;
    height: 100vh;
  }
`;

export default GlobalStyle;
