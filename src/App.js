// import './locales/i18n';
import { Routes, Route } from 'react-router-dom';
import { ProductList } from './pages';

export default function AppRoutes() {
  return <>
    <Routes>
      <Route path='/' element={<ProductList />}/>
    </Routes>
  </>
}


