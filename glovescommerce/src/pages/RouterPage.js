import React from 'react';
import {BrowserRouter, Routes,Route} from 'react-router-dom';
import Home from './Home';
import Contact from './Contact';
import { Products } from './Products';

export default function RouterPage() {
  return (
    <div>
        <BrowserRouter>
        <Routes>
            
              <Route path="/" index element={<Home/>} />
              <Route path="contact" element={<Contact/>} />
              <Route path="products" element={<Products/>} />
            
        </Routes>
        </BrowserRouter>
    </div>
  )
}

