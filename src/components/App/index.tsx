import { FC } from 'react';

import { Header } from 'components/Header';
import { Footer } from 'components/Footer';
import { LinksList } from 'components/LinksList';
import { contentLinks } from 'data/contentLinks';
import { popularLinks } from 'data/popularLinks';
import 'css.modifiers';
import 'bootstrap/dist/css/bootstrap-reboot.css';
import 'bootstrap/dist/css/bootstrap-grid.css';
import { GlobalStyles } from 'globalStyles';

export const App: FC = () => {
  const linksList = popularLinks.concat(contentLinks);

  return (
    <>
      <GlobalStyles />
      <Header />
      <div className="container-fluid main pl0 pr0" id="main" data-testid="appMainBlock">
        <LinksList contentLinks={linksList} />
      </div>
      <Footer />
    </>
  );
};
