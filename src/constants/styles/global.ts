import { createGlobalStyle } from 'styled-components';
import { defaultFontFamily } from '../defaults';
import { scrollBarWidth } from './sizes';

export const GlobalStyle = createGlobalStyle`
  body, html {
    width: 100%;
    height: 100%;
  }

  body {
    margin: 0;
    // font-family: -apple-system, BlinkMacSystemFont, ${defaultFontFamily};
    // -webkit-font-smoothing: antialiased;
    // -moz-osx-font-smoothing: grayscale;
    font-family: 'Montserrat', sans-serif;
  }

  * {
    box-sizing: border-box;
  }

  a {
    text-decoration: none;
    outline: none;
    -webkit-tap-highlight-color: transparent;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
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

  // ::selection {
  //   background: red;
  //   color: green;
  // }
  //
  // ::-webkit-scrollbar-track
  // {
  //   -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
  //   background-color: rgba(157, 158, 159, 0.25);
  //   border-radius:  23px;
  // }
  //
  // ::-webkit-scrollbar
  // {
  //   width: ${scrollBarWidth};
  //   height: ${scrollBarWidth};
  //   background: unset;//#F5F5F5;
  //   //border-radius: 23px;
  // }
  //
  // ::-webkit-scrollbar-thumb
  // {
  //   background-color: #9D9E9F;
  //   border-radius: 23px;
  // }

  #root {
    //position: relative;
    //background-color: #fdefde;
    // #fdefde e9e6da
    //background-color: #121217;
    width: 100%;
    height: 100%;
  }

  .MuiFormControl-root {
    width: 100%;
  }
`;
