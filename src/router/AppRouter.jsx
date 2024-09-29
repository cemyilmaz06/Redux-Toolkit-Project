// src/router/AppRouter.jsx
import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Basket from "../pages/BasketPage";
import NotFound from "../pages/NotFound";

import Navbar from "../components/Navbar";
import BasketPage from "../pages/BasketPage";

const AppRouter = () => (
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/basket" element={<BasketPage />} />
      {/* <Route path="*" element={<NotFound/>} /> */}
    </Routes>
  </BrowserRouter>
);

export default AppRouter;
