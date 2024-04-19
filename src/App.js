import logo from './logo.svg';
import './App.css';
import SetProduct from './components/Product';
import UseFetch from './components/UseFetch';
import SetUser from './components/User';
import earbuds from './assets/37-random-products-that-we-love_31.jpg';
import usb from './assets/SwiftRNG-cleanedup.jpg';
import charger from './assets/images (1).jpg';
import idk from './assets/images.jpg';
import './components/productStyle.css'
import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';

function App() {



  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;