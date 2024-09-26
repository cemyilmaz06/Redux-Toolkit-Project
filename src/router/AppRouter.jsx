// src/router/AppRouter.jsx
import React from 'react';
import {  Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';
import Basket from '../pages/Basket';
import NotFound from '../pages/NotFound';


import Navbar from '../components/Navbar';

const AppRouter = () => (
  <BrowserRouter>
  <Navbar/>
    <Routes>
    <Route path="/" element={<Home />} />

      <Route path="/basket" element={<Basket/>} />
      <Route path="*" element={<NotFound/>} />
    </Routes>
  </BrowserRouter>
);

export default AppRouter;
