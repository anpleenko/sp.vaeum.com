import { FC, Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';

export const AppBrowserRouter: FC = ({ children }) => (
  <BrowserRouter>
    <Suspense fallback={'loading'}>{children}</Suspense>
  </BrowserRouter>
);
