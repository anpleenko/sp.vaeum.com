import Link from '@mui/material/Link';
import styled from 'styled-components';

export const FooterCopyrightStyled = styled(Link)`
  margin: 10px 0px;
  font-size: 13px;
`;

export const FooterMainStyled = styled.footer`
  grid-area: footer;
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  grid-gap: 4px;
  padding-left: 12px;
  padding-right: 12px;
`;

export const FooterYearStyled = styled.p`
  margin: 10px 0px;
  font-size: 13px;
`;

export const FooterLinkStyled = styled(Link)`
  margin: 10px 5px;
  font-size: 13px;
`;

export const FooterRightStyled = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  grid-gap: 4px;
`;
