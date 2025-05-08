import React from "react";
import { BrowserRouter, Routrs, Route } from 'react-route'
import Product from './Product'
import Example from '.Home'
import Navbar from './Navbar'
export default function WebRoutes() {
    return (
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="buyer" element={<Navbar />}>
            {/* outlet */}
            <Route index element={ <Example/>}></Route>
            <Route path="/pro" element={<Product />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    );
}