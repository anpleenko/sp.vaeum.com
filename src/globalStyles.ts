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

  ul.menu-list {
    padding-left: 0;
    margin-bottom: 0;
  }

  .text-white {
    color: #fff;
  }

  .text-black {
    color: #000;
  }

  .text-left {
    text-align: left;
  }

  .text-center {
    text-align: center;
  }

  .text-right {
    text-align: right;
  }

  .text-justify {
    text-align: justify;
  }

  .text-nowrap {
    white-space: nowrap;
  }

  .text-lowercase {
    text-transform: lowercase;
  }

  .text-uppercase {
    text-transform: uppercase;
  }

  .m0 {
    margin: 0;
  }

  .mt0 {
    margin-top: 0;
  }

  .mr0 {
    margin-right: 0;
  }

  .mb0 {
    margin-bottom: 0;
  }

  .ml0 {
    margin-left: 0;
  }

  .p0 {
    padding: 0;
  }

  .pt0 {
    padding-top: 0;
  }

  .pr0 {
    padding-right: 0;
  }

  .pb0 {
    padding-bottom: 0;
  }

  .pl0 {
    padding-left: 0;
  }

  .cur:hover {
    cursor: pointer;
  }

  .transform-middle {
    top: 50%;

    transform: translateY(-50%);
  }

  .pull-left {
    float: left !important;
  }

  .pull-right {
    float: right !important;
  }

  .block-center,
  .table-center {
    margin-left: auto;
    margin-right: auto;
  }

  .block-center,
  .db,
  .text-overflow,
  .transform-middle,
  ul.menu-list > li > a {
    display: block;
  }

  .dib {
    display: inline-block;
  }

  .dt,
  .table-center {
    display: table;
  }

  .dn {
    display: none;
  }

  .text-overflow {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .pr,
  .transform-middle {
    position: relative;
  }

  .pa {
    position: absolute;
  }

  .pf {
    position: fixed;
  }

  .ps {
    position: static;
  }

  .no-outline:active,
  .no-outline:active:focus,
  .no-outline:focus {
    outline: none !important;
  }

  .no-select {
    user-select: none;
  }

  .fluid {
    width: 100%;
  }

  .no-underline,
  .no-underline:active,
  .no-underline:focus,
  .no-underline:hover,
  .text-line,
  .text-underline:active,
  .text-underline:focus,
  .text-underline:hover {
    text-decoration: none;
  }

  .text-line:active,
  .text-line:focus,
  .text-line:hover,
  .text-underline {
    text-decoration: underline;
  }

  ul.menu-list > li {
    float: left;
  }

  .fn {
    float: none;
  }

  .text-smoothing {
    text-shadow: -1px -1px 1px rgba(255, 255, 255, 0.2), 1px 1px 1px rgba(255, 255, 255, 0.2),
      1px 1px 1px rgba(0, 0, 0, 0.7);
  }

  ul.menu-list:after,
  ul.menu-list:before {
    content: ' ';
    display: table;
  }

  ul.menu-list:after {
    clear: both;
  }

  .lsn li,
  ul.menu-list > li {
    list-style: none;
  }

  .hard-hide {
    margin: -1px;
    padding: 0;
    width: 1px;
    height: 1px;
    overflow: hidden;
    clip: rect(0 0 0 0);
    clip: rect(0, 0, 0, 0);
    position: absolute;
  }

  .text-middle {
    vertical-align: middle;
  }

  .text-capitalize {
    text-transform: capitalize;
  }

  .fw100 {
    font-weight: 100;
  }

  .fw200 {
    font-weight: 200;
  }

  .fw300 {
    font-weight: 300;
  }

  .fw400 {
    font-weight: 400;
  }

  .fw500 {
    font-weight: 500;
  }

  .fw600 {
    font-weight: 600;
  }

  .fw700 {
    font-weight: 700;
  }

  .fw800 {
    font-weight: 800;
  }

  .fw900 {
    font-weight: 900;
  }
`;
