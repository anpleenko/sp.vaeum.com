import { FC } from 'react';

import { MenuNavStyled, AppNameStyled, MenuLinkStyled } from './styles';
import { HeaderMenuProps } from './interfaces';

export const HeaderMenu: FC<HeaderMenuProps> = ({ dataTestid, menuLinks }) => (
  <MenuNavStyled data-testid={dataTestid}>
    <ul className="lsn mb0 pl0 mt0 clearfix">
      {menuLinks.map((menuLink) => (
        <li key={menuLink.label} data-testid="headerMenuLink">
          <AppNameStyled>{menuLink.label}</AppNameStyled>

          {menuLink.items && (
            <ul>
              {menuLink.items.map((el) => (
                <li key={el.url}>
                  <MenuLinkStyled
                    href={el.url}
                    target="_blank"
                    rel="noreferrer noopener"
                    data-testid="headerMenuLinkItem"
                  >
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
