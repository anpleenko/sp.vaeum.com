import styled from 'styled-components';

export const MenuNavStyled = styled.nav`
  float: left;

  @media (max-width: 1023px) {
    display: none;
  }

  ul {
    text-align: left;

    li {
      float: left;
      position: relative;
      cursor: pointer;
      transition: all 0.2s;

      &:hover {
        .header-menu__label {
          background: #333;
          color: #fff;
        }

        ul {
          display: block;
          opacity: 1;
          visibility: visible;
        }
      }

      ul {
        padding: 0;
        position: absolute;
        top: 100%;
        left: 0;
        box-shadow: none;
        display: none;
        opacity: 0;
        visibility: hidden;
        transition: opacity 0.2s;
        background: #333;

        li {
          background: #333;
          display: block;
          color: #fff;
          float: none;
          min-width: 200px;

          &:hover {
            a {
              background: #333;
            }
          }
        }
      }
    }
  }
`;

export const AppNameStyled = styled.span`
  display: block;
  padding: 10px 15px;
  color: #333;
  text-decoration: none;
  height: 40px;
  font-size: 14px;

  @media (max-width: 1200px) {
    padding: 10px;
  }
`;

export const MenuLinkStyled = styled.a`
  display: block;
  padding: 10px 15px;
  color: #fff;
  text-decoration: none;
  font-size: 14px;

  &:hover {
    color: #fff;
    text-decoration: none;
  }
`;
