// import './locales/i18n';
import { Apps, Business, Dashboard, Opacity, Person, Redeem, ShoppingBasket, Store } from '@mui/icons-material';
import { MenuItem } from '@mui/material';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import SideBar from './components/SideBar';
import { ColumnsTwo } from './layouts';
import { ProductForm, ProductList } from './pages';

export default function AppRoutes() {

  

  return <>
    <Routes>
      <Route path='/test-visual-software/'
        element={
          <ColumnsTwo
            xs={11.5}
            columnOne={<SideBar />}
            columnTwo={<ProductList />}
          />
        }/>
      <Route path='/test-visual-software/new'
        element={
          <ColumnsTwo
            xs={11.5}
            columnOne={<SideBar />}
            columnTwo={<ProductForm />}
          />
        }/>
      <Route path='/test-visual-software/edit/:id'
        element={
          <ColumnsTwo
            xs={11.5}
            columnOne={<SideBar />}
            columnTwo={<ProductForm />}
          />
        }/>
    </Routes>
  </>
}


