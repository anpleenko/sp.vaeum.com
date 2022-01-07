import { FC } from 'react';
import { Reboot } from 'styled-reboot';

import { GlobalStyles } from 'globalStyles';
import { Header } from 'components/Header';
import { Footer } from 'components/Footer';
import LinksListPage from 'pages/links-list';

export const App: FC = () => (
  <>
    <Reboot />
    <GlobalStyles />
    <Header />
    <LinksListPage />
    <Footer />
  </>
);
