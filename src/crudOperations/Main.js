import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import { NavBar1 } from './NavBar1'
import { Products } from './Products'
import { CreateProduct } from './CreateProduct'
import { UpdateProduct } from './UpdateProduct'
export const Main = () => {
  return (
    <div>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<NavBar1/>}>
                <Route path='/products' element={<Products/>}/>
                <Route path='/createproduct' element={<CreateProduct/>}/>
                <Route path='/update/:id' element={<UpdateProduct/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    </div>
  )
}
