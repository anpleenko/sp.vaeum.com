import { FC } from 'react';

import { menuLinks } from 'data/menuLinks';

import { MenuNavStyled, AppNameStyled, MenuLinkStyled } from './styles';

export const HeaderMenu: FC = () => (
  <MenuNavStyled>
    <ul className="lsn mb0 pl0 mt0 clearfix">
      {menuLinks.map((menuLink) => (
        <li key={menuLink.label}>
          <AppNameStyled>{menuLink.label}</AppNameStyled>

          {menuLink.items && (
            <ul>
              {menuLink.items.map((el) => (
                <li key={el.url}>
                  <MenuLinkStyled href={el.url} target="_blank" rel="noreferrer noopener">
                    {el.title}
                  </MenuLinkStyled>
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  </MenuNavStyled>
);
