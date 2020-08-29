import { createGlobalStyle } from 'styled-components';
import { backgroundColor, primaryColor, scrollBarWidth, white } from '../';
import { defaultFontFamily } from '../defaults';

export const GlobalStyle = createGlobalStyle`
  body, html {
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

  ::selection {
    background: ${primaryColor};
    color: ${white};
  }

  ::-webkit-scrollbar-track
  {
    -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.3);
    background-color: #F5F5F5;
  }

  ::-webkit-scrollbar
  {
    width: ${scrollBarWidth};
    height: ${scrollBarWidth};
    background-color: #F5F5F5;
  }

  ::-webkit-scrollbar-thumb
  {
    background-color: ${primaryColor};
  }

  #root {
    background-color: ${backgroundColor};
    width: 100%;
    min-height: 100%;
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
`;
