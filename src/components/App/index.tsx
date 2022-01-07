import { FC } from 'react';
import { Reboot } from 'styled-reboot';
import { Container } from 'styled-bootstrap-grid';

import { Header } from 'components/Header';
import { Footer } from 'components/Footer';
import { LinksList } from 'components/LinksList';
import { contentLinks } from 'data/contentLinks';
import { popularLinks } from 'data/popularLinks';
import { GlobalStyles } from 'globalStyles';

import 'css.modifiers';

export const App: FC = () => {
  const linksList = popularLinks.concat(contentLinks);

  return (
    <>
      <Reboot />
      <GlobalStyles />
      <Header />
      <Container fluid className="main pl0 pr0" id="main" data-testid="appMainBlock">
        <LinksList contentLinks={linksList} />
      </Container>
      <Footer />
    </>
  );
};
