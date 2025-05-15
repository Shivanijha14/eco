import React from 'react';
import logoImg from './shop vector icon.png';
import CartImg from './cart.png';
import shirtImg2 from './men shirts.png';

const FindProducts = () => {
  const handleLogoClick = () => {
    console.log('Logo clicked - navigate to home');
  };

  const handleCartClick = () => {
    console.log('Cart clicked - navigate to cart');
  };

  const handleProductClick = (index) => {
    console.log(`Product ${index + 1} clicked - navigate to product details`);
  };

  const renderProductSection = (title) => (
    <div className="mt-6">
      <h2 className="text-xl font-bold text-slate-700 mb-3">{title}</h2>
      <div className="flex flex-wrap gap-3 justify-center">
        {[...Array(6)].map((_, index) => (
          <button
            key={index}
            onClick={() => handleProductClick(index)}
            className="bg-white rounded-2xl p-3 w-[45%] shadow-md box-border text-left hover:shadow-lg transition-shadow"
          >
            <img
              src={shirtImg2}
              alt="Shirt"
              className="w-full h-44 rounded-xl object-cover"
            />
            <p className="text-sm font-semibold mt-2">
              Stylish Glamorous Men Shirts
            </p>
            <p className="text-xs text-gray-500">Sold By Wholesaler</p>
            <p className="font-bold text-base text-black mt-1">
              500/- Per Pack
            </p>
          </button>
        ))}
      </div>
    </div>
  );

  return (
    <div className="p-3 font-sans bg-slate-50 max-w-[100vw] overflow-x-hidden">
      <div className="flex justify-between items-center px-3 pb-2">
        <div className="cursor-pointer" onClick={handleLogoClick}>
          <img src={logoImg} alt="EcoCys Logo" className="h-9" />
        </div>
        <div
          className="flex items-center gap-3 cursor-pointer"
          onClick={handleCartClick}
        >
          <img src={CartImg} alt="EcoCys Cart" className="h-9" />
        </div>
      </div>

      {renderProductSection('New Products')}

      <footer className="text-center py-4 mt-6 text-sm text-gray-500">
        Copyright 2025 By EcoCys. All Rights Reserved.
      </footer>
    </div>
  );
};

export default FindProducts;
