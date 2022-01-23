import styled from 'styled-components';

export const AppBarMenuStyled = styled.nav`
  > ul > li {
    padding: 12px 12px;
  }

  ul {
    list-style: none;
    margin: 0;
    padding-left: 0;
  }

  li {
    color: #fff;
    display: block;
    float: left;
    position: relative;
    text-decoration: none;
    transition-duration: 0.5s;
  }

  li a {
    color: #fff;
    padding: 12px 12px;
    display: block;
  }

  li:hover,
  li:focus-within {
    background-color: #1359a0;
    cursor: pointer;
  }

  li:focus-within a {
    outline: none;
  }

  ul li ul {
    background-color: #0e467e;
    visibility: hidden;
    opacity: 0;
    min-width: 250px;
    position: absolute;
    transition: all 0.5s ease;
    left: 0;
    top: 100%;
    display: none;

    box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);
  }

  ul li:hover > ul,
  ul li ul:hover {
    visibility: visible;
    opacity: 1;
    display: block;
  }

  ul li ul li {
    clear: both;
    width: 100%;
  }
`;
