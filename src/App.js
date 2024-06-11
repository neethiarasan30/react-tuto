import './App.css';
import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { NavBar1 } from './ReactRouterDom/NavBar1';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import { Products } from './ReactRouterDom/products';
import { NotFound } from './ReactRouterDom/NotFound';
import { Home } from './ReactRouterDom/Home';


function App() {
  return (
    <>
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<NavBar1/>}> 
              <Route path='products' element={<Products/>}/>
              <Route index element={<Home/>}/>
              <Route path="*" element={<NotFound/>}/>
              </Route>
          </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
