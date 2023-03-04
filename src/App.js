import { Routes, Route } from 'react-router-dom';
import { Main, ProductList } from './pages';

export default function AppRoutes() {
  return <>
    <Routes>
      <Route path='/' element={<ProductList />}/>
    </Routes>
  </>
}


