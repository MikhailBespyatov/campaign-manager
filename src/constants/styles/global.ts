import { createGlobalStyle } from 'styled-components';
import { backgroundColor, primaryColor, scrollBarBorderRadius, scrollBarWidth, white } from '../';
import { defaultFontFamily } from '../defaults';
export const GlobalStyle = createGlobalStyle`
  body, html {
    width: 100%;
    min-height: 100%;
  }
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, ${defaultFontFamily};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  * {
    box-sizing: border-box;
  }

  a {
    text-decoration: none;
    outline: none;
    -webkit-tap-highlight-color: transparent;
  }

  button, input, select, textarea {
    outline: none;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type='number'] {
    -moz-appearance: textfield;
    margin: 0;
  }

  ::selection {
    background: ${primaryColor};
    color: ${white};
  }

  ::-webkit-scrollbar-track
  {
    -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.3);
    background-color: red;
  }

  ::-webkit-scrollbar
  {
    width: ${scrollBarWidth};
    height: ${scrollBarWidth};
    border-radius: ${scrollBarBorderRadius};
    //background-color: #F5F5F5;
  }

  ::-webkit-scrollbar-thumb
  {
    background-color: ${primaryColor};
  }

  #root {
    position: relative;
    background-color: #121217;
    //background-color: ${backgroundColor};
    width: 100%;
    min-height: 100%;
  }
`;
