import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  html,
  body,
  #root {
    height: 100%;
  }

  body {
    overflow-y: scroll;
    overflow-x: hidden;
    background: #f7f7f7;
    -webkit-font-smoothing: subpixel-antialiased;
    font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji;
  }

  #root {
    display: grid;
    grid-gap: 20px;
    height: 100%;
    grid-template-columns: 1fr;
    grid-template-areas:
      'nav'
      'main'
      'footer';
    grid-template-rows: auto 1fr auto;
  }

  svg {
    display: inline-block;
    fill: currentColor;
    vertical-align: text-top;
    height: auto;
  }
`;
