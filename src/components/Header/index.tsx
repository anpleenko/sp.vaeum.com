import { FC } from 'react';

import { HeaderMenu } from 'components/HeaderMenu';

import { HeaderStyled, LogoStyled } from './styles';

export const Header: FC = () => (
  <HeaderStyled id="nav">
    <div className="container-fluid">
      <LogoStyled className="cur">Bookmarks</LogoStyled>
      <HeaderMenu />
    </div>
  </HeaderStyled>
);
