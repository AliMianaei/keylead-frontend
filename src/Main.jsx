import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home/Home';
import Advertise from './pages/Advertisement/Advertise';
import SellerAdv from './pages/Advertisement/SellerAdv';
import BuyerAdv from './pages/Advertisement/BuyerAdv';
import Products from './pages/products/Products';
import FormLayout from './layouts/FormLayout';
import Login from './pages/login/Login';
import Register from './pages/register/Register';

const Main = () => {
  return (
    <Routes>
      <Route path='/' exact element={<Home/>} />
      <Route path='/products' element={<Products/>} />
      <Route path='advertise' element={<Advertise/>}>
        <Route path="" element={<SellerAdv/>} />
        <Route path="seller" element={<SellerAdv/>} />
        <Route path="buyer" element={<BuyerAdv/>} />
      </Route>

      <Route element={<FormLayout/>}>
        <Route path='login' element={<Login/>} />
        <Route path='register' element={<Register/>} />
      </Route>


    </Routes>
  )
}

export default Main;