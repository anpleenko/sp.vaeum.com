import { lazy } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

const LinksListPage = lazy(() => import('./links-list'));

export const Routing = () => (
  <Routes>
    <Route path="/" element={<LinksListPage />} />
    <Route path="*" element={<Navigate replace to="/" />} />
  </Routes>
);
