import React, { useState } from 'react';
import HomePage from './components/HomePage';
import ProductPage from './components/ProductPage';
import ShopCategoryPage from './components/ShopCategoryPage';
import CartPage from './components/CartPage';

function App() {
  // State to switch between pages in the specified order
  const [currentPage, setCurrentPage] = useState('home');

  return (
    <div>
      {/* Top Switcher Bar */}
      <div className="bg-gray-900 text-white py-2.5 px-4 text-center text-xs sm:text-sm flex justify-center items-center gap-4 sm:gap-6 sticky top-0 z-50 shadow-md flex-wrap">
        <span className="text-gray-400 font-medium">Switch Page:</span>
        
        {/* 1. Home Page */}
        <button 
          onClick={() => setCurrentPage('home')} 
          className={`px-3 py-1 rounded transition-colors ${currentPage === 'home' ? 'bg-yellow-400 text-black font-bold' : 'hover:text-yellow-400'}`}
        >
          Home Page
        </button>

        {/* 2. Product Details Page */}
        <button 
          onClick={() => setCurrentPage('product')} 
          className={`px-3 py-1 rounded transition-colors ${currentPage === 'product' ? 'bg-yellow-400 text-black font-bold' : 'hover:text-yellow-400'}`}
        >
          Product Details Page
        </button>

        {/* 3. ShopCategory Page */}
        <button 
          onClick={() => setCurrentPage('shop')} 
          className={`px-3 py-1 rounded transition-colors ${currentPage === 'shop' ? 'bg-yellow-400 text-black font-bold' : 'hover:text-yellow-400'}`}
        >
          ShopCategory Page
        </button>

        {/* 4. Cart Page */}
        <button 
          onClick={() => setCurrentPage('cart')} 
          className={`px-3 py-1 rounded transition-colors ${currentPage === 'cart' ? 'bg-yellow-400 text-black font-bold' : 'hover:text-yellow-400'}`}
        >
          Cart Page
        </button>
      </div>

      {/* Render Selected Component */}
      {currentPage === 'home' && <HomePage />}
      {currentPage === 'product' && <ProductPage />}
      {currentPage === 'shop' && <ShopCategoryPage />}
      {currentPage === 'cart' && <CartPage />}
    </div>
  );
}

export default App;