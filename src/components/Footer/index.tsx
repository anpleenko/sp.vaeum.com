import { FC } from 'react';
import { Container } from 'styled-bootstrap-grid';

import {
  FooterCopyrightStyled,
  FooterMainStyled,
  FooterLinkStyled,
  FooterRightStyled,
  FooterYearStyled,
} from './styles';

const fullYear = new Date().getFullYear();

export const Footer: FC = () => (
  <FooterMainStyled id="footer" data-testid="footerContainer">
    <Container fluid>
      <FooterCopyrightStyled href="http://vaeum.com" rel="noreferrer noopener" target="_blank">
        Наш блог
      </FooterCopyrightStyled>

      <FooterRightStyled>
        <FooterLinkStyled
          href="https://gitlab.com/vaeum/bookmarks/issues/new"
          rel="noreferrer noopener"
          target="_blank"
        >
          Сообщить о проблеме
        </FooterLinkStyled>

        <FooterYearStyled data-testid="footerTime">{`${fullYear} г.`}</FooterYearStyled>
      </FooterRightStyled>
    </Container>
  </FooterMainStyled>
);
