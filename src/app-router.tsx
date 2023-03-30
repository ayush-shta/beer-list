import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { appRoutes } from './constants/app-routes';
import BeerList from './modules/beer/pages/beer-list';

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={appRoutes.root} element={<BeerList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
