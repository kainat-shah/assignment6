import { Routes, Route } from 'react-router-dom';
import Home from '../components/home';
import Products from '../components/product-pages/view-product';
import CreateProduct from '../components/product-pages/create';
import Contact from '../components/contact';
import NotFound from '../components/notfound';
import About from '../components/about';

const AppRoutes = () => {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/products' element={<Products/>} />
      <Route path='/create' element={<CreateProduct/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/create/:id?' element={<CreateProduct/>}/>
      <Route path='/*' element={<NotFound/>} />
    </Routes>
    </>
  );
}

export default AppRoutes;
