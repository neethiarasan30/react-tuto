import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {NavBar1} from './NavBar1'
import {Product} from './Product'
import {NotFound} from './NotFound'
import {Home} from './Home'

export const Router = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<NavBar1/>}>
            <Route path="products" element={<Product/>} />
            <Route index element={<Home />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};
