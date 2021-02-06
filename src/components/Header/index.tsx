import { FC } from 'react';

import { menuLinks } from 'data/menuLinks';

import { HeaderMenu } from '../HeaderMenu';

import { HeaderStyled, LogoStyled } from './styles';

export const Header: FC = () => (
  <HeaderStyled id="nav" data-testid="headerComponent">
    <div className="container-fluid">
      <LogoStyled className="cur" data-testid="headerLogo">
        Bookmarks
      </LogoStyled>
      <HeaderMenu dataTestid="headerMenu" menuLinks={menuLinks} />
    </div>
  </HeaderStyled>
);
