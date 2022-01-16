import { FC } from 'react';
import { AppBar, Toolbar } from '@mui/material';

export const AppTopBar: FC = ({ children }) => (
  <AppBar position="static" color="primary">
    <Toolbar variant="dense">{children}</Toolbar>
  </AppBar>
);
