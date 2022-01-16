import { FC } from 'react';

import { AppBrowserRouter } from './AppBrowserRouter';

export const Providers: FC = ({ children }) => <AppBrowserRouter>{children}</AppBrowserRouter>;
