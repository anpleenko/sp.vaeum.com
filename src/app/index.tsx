import { FC } from 'react';
import CssBaseline from '@mui/material/CssBaseline';

import { Routing } from 'pages';

import { GlobalStyles } from './globalStyles';
import { Providers } from './providers';

export const App: FC = () => (
  <Providers>
    <CssBaseline />
    <GlobalStyles />
    <Routing />
  </Providers>
);
