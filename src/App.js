import React from 'react';
import Navbar from './components/Navbar.js';
import './App.css';
import Home from './components/Pages/Home';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Services from './components/Pages/Services.js';
import Products from './components/Pages/Products.js';
import SignUp from './components/Pages/SignUp.js';

function App() {
  return (
    <>
     <BrowserRouter>
        <Navbar />
    
        <Routes>
           <Route path='/' exact element={<Home />} />
           <Route path='/services' element={<Services />} />
           <Route path='/products' element={<Products />} />
           <Route path='/sign-up' element={<SignUp />} />
        </Routes>
      </BrowserRouter>
     
    </>
  );
}

export default App;
