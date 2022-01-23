import { FC } from 'react';
import Link from '@mui/material/Link';

import { AppBarMenuStyled } from './styles';
import { AppBarMenuProps } from './interfaces';
import { HEADER_MENU_ITEM_DATA_TESTID, HEADER_MENU } from './constants';

// https://css-tricks.com/solved-with-css-dropdown-menus/
export const AppBarMenu: FC<AppBarMenuProps> = ({ menuLinks }) => (
  <AppBarMenuStyled role="navigation" data-testid={HEADER_MENU}>
    <ul>
      {menuLinks.map((menu) => (
        <li key={menu.label} data-testid={HEADER_MENU_ITEM_DATA_TESTID}>
          {menu.label}

          {menu.items.length && (
            <ul className="dropdown" aria-label="submenu">
              {menu.items.map((item) => (
                <li key={item.title}>
                  <Link href={`http://${item.url}`} underline="none" target="_blank">
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  </AppBarMenuStyled>
);
