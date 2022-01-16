import { FC, useState, MouseEvent } from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Link from '@mui/material/Link';

import { MenuLink } from 'data/interfaces';

import { MENU_BUTTON_DATA_TESTID, MENU_ITEM_DATA_TESTID } from './constants';

export const AppBarMenu: FC<MenuLink> = ({ label, items }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        color="inherit"
        data-testid={MENU_BUTTON_DATA_TESTID}
      >
        {label}
      </Button>

      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        {items.map((item) => (
          <MenuItem key={item.url} onClick={handleClose} data-testid={MENU_ITEM_DATA_TESTID}>
            <Link href={`http://${item.url}`} underline="none" color="inherit" target="_blank">
              {item.title}
            </Link>
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};
