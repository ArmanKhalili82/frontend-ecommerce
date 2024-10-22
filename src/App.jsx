import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ProductList from './pages/ProductList';
import SingleProduct from './pages/SingleProduct';
import Navbar from './components/header/Navbar';
import HomePage from './pages/HomePage';

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/product/:productId" element={<SingleProduct />} />
      </Routes>
    </div>
  );
};

export default App;
