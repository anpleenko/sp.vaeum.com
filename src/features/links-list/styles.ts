import styled, { css } from 'styled-components';
import Card from '@mui/material/Card';
import Link from '@mui/material/Link';

import { LogoStyledProps } from './interface';

const heightIcon = 50;
const widthIcon = 50;
const linksMargin = 30;

export const LinksListStyled = styled.div`
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(${widthIcon + linksMargin * 3}px, 1fr));
  justify-items: center;
  grid-gap: 32px 0px;
`;

export const LinkStyled = styled(Link)`
  color: #333;
  font-weight: bold;
  display: block;

  &:hover {
    text-decoration: none;
    color: #333;
  }
`;

export const AvatarStyled = styled.div`
  height: ${heightIcon}px;
  width: ${widthIcon}px;
  line-height: ${widthIcon}px;
  border-radius: 10px;
  margin: 0 auto 12px;
`;

export const LogoStyled = styled(AvatarStyled)<LogoStyledProps>`
  ${({ logo }) => css`
    background-image: ${`url(/icons/${logo}.png)`};
    background-size: cover;
    background-position: center;
  `}
`;

export const DumpStyled = styled(AvatarStyled)`
  border: 1px #333 solid;
  background: #f7f7f7;
  font-size: 24px;
  text-align: center;
  font-weight: bold;
  vertical-align: middle;
`;

export const CardStyled = styled(Card)`
  background-image: none !important;
  text-align: center;
  box-shadow: none !important;
`;
