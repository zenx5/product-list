// import './locales/i18n';
import { Apps, Business, Dashboard, Opacity, Person, Redeem, ShoppingBasket, Store } from '@mui/icons-material';
import { MenuItem } from '@mui/material';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import SideBar from './components/SideBar';
import { ColumnsTwo } from './layouts';
import { ProductList } from './pages';

export default function AppRoutes() {

  

  return <>
    <Routes>
      <Route
        path='/'
        element={
          <ColumnsTwo
            xs={11.5}
            columnOne={<SideBar />}
            columnTwo={<ProductList />}
          />
        }/>
    </Routes>
  </>
}


