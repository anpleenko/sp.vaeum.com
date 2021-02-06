import { FC, useCallback, useState } from 'react';
import WindowSizeListener, { WindowSize } from 'react-window-size-listener';

import { Header } from 'components/Header';
import { Footer } from 'components/Footer';
import { LinksList } from 'components/LinksList';
import { contentLinks } from 'data/contentLinks';
import { popularLinks } from 'data/popularLinks';
import { menuLinks } from 'data/menuLinks';
import 'css.modifiers';
import 'bootstrap/dist/css/bootstrap-reboot.css';
import 'bootstrap/dist/css/bootstrap-grid.css';
import { GlobalStyles } from 'globalStyles';
import { ContentLink } from 'data/interfaces';

export const App: FC = () => {
  const [menuItems, setMenuItems] = useState<ContentLink[]>([]);
  const linksList = popularLinks.concat(menuItems, contentLinks);

  const handlerResize = useCallback((windowSize: WindowSize): void => {
    if (windowSize.windowWidth < 1024) {
      const links = menuLinks.map((link) => link.items).reduce((acc, linkItem) => acc.concat(linkItem), []);

      setMenuItems(links);
    } else {
      setMenuItems([]);
    }
  }, []);

  return (
    <>
      <GlobalStyles />
      <Header />
      <div className="container-fluid main pl0 pr0" id="main" data-testid="appMainBlock">
        <WindowSizeListener onResize={handlerResize} />
        <LinksList contentLinks={linksList} />
      </div>
      <Footer />
    </>
  );
};
