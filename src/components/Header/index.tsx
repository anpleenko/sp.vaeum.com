import { FC } from 'react';

import { HeaderMenu } from 'components/HeaderMenu';

import { HeaderStyled, LogoStyled } from './styles';

export const Header: FC = () => (
  <HeaderStyled id="nav" data-testid="headerComponent">
    <div className="container-fluid">
      <LogoStyled className="cur" data-testid="headerLogo">
        Bookmarks
      </LogoStyled>
      <HeaderMenu dataTestid="headerMenu" />
    </div>
  </HeaderStyled>
);
