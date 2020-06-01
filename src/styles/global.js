import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background: #fff;
    height: 100vh;
  }

  html, body, button, input {
    font-family: 'ArialRounded', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
  }

  button {
    cursor: pointer;
  }

  #root {
    /* display: flex;
    align-items: center;
    justify-content: center; */
  }
`;