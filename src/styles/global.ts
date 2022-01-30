import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  a {
    text-decoration: none;
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
    --color-primary-orange: #DB524D;
    --color-secondary-orange: rgba(255, 255, 255, 0.1);
    --color-header-border-orange: #d8524d;

    --color-primary-green: #468e92;
    --color-secondary-green: #67a3a5;
    --color-header-border-green: #3c8184;
    
    --color-primary-blue: #437ea8;
    --color-secondary-blue: #6595b9;
    --color-header-border-blue: #497696;

    --color-header-white-opacity: rgba(255, 255, 255, 0.2);
  }
`;