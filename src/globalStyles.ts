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

  #nav {
    grid-area: nav;
  }

  #main {
    grid-area: main;
  }

  #footer {
    grid-area: footer;
  }

  .container-fluid {
    max-width: 1920px;
  }

  .container-fluid.pl0 {
    padding-left: 0;
  }

  .container-fluid.pr0 {
    padding-right: 0;
  }

  svg {
    display: inline-block;
    fill: currentColor;
    vertical-align: text-top;
    height: auto;
  }

  a {
    cursor: pointer;
  }

  .first-letter-uppercase:first-letter {
    text-transform: uppercase;
  }

  h1:first-child,
  h2:first-child,
  h3:first-child,
  h4:first-child,
  h5:first-child,
  h6:first-child,
  .h1:first-child,
  .h2:first-child,
  .h3:first-child,
  .h4:first-child,
  .h5:first-child,
  .h6:first-child {
    margin-top: 0px;
  }

  h1:last-child,
  h2:last-child,
  h3:last-child,
  h4:last-child,
  h5:last-child,
  h6:last-child,
  .h1:last-child,
  .h2:last-child,
  .h3:last-child,
  .h4:last-child,
  .h5:last-child,
  .h6:last-child {
    margin-bottom: 0px;
  }

  h1 .h1 {
    font-size: 30px;
  }

  h2,
  .h2 {
    font-size: 26px;
  }

  h3,
  .h3 {
    font-size: 22px;
  }

  h4,
  .h4 {
    font-size: 20px;
  }

  h5,
  .h5 {
    font-size: 16px;
  }

  h6,
  .h6 {
    font-size: 12px;
  }

  p {
    margin: 0 0 10px 0;
  }
`;
