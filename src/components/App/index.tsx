import { Component } from 'react';
import { hot } from 'react-hot-loader';
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

import { AppProps, AppState } from './interfaces';
import { WrapperStyled } from './styles';

class MainContainer extends Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);

    this.state = {
      menuItems: [],
    };
  }

  handlerResize = (windowSize: WindowSize) => {
    const menuItems: ContentLink[] = [];

    if (windowSize.windowWidth < 1024) {
      menuLinks.map((e) => e.items.map((el) => menuItems.push(el)));

      this.setState({ menuItems });
    } else {
      this.setState({ menuItems: [] });
    }
  };

  render() {
    const { menuItems } = this.state;
    const linksList = popularLinks.concat(menuItems, contentLinks);

    return (
      <>
        <GlobalStyles />

        <Header />

        <WrapperStyled className="container-fluid main pl0 pr0" id="main">
          <WindowSizeListener onResize={this.handlerResize} />
          <LinksList contentLinks={linksList} />
        </WrapperStyled>

        <Footer />
      </>
    );
  }
}

export const App = hot(module)(MainContainer);
