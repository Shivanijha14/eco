// src/assets/component/FindProducts.jsx

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ProductCard, { dummyProducts } from './ProductCard';

const filtersData = {
  Gender: ['Men', 'Women', 'Unisex'],
  Color: ['Red', 'Blue', 'Green', 'Black', 'White'],
  Size: ['S', 'M', 'L', 'XL', 'XXL'],
  Price: ['Under ₹500', '₹500 - ₹1000', '₹1000 - ₹2000', 'Above ₹2000'],
};

const FindProducts = () => {
  const [openSections, setOpenSections] = useState({});
  const [selectedFilters, setSelectedFilters] = useState({
    Gender: [],
    Color: [],
    Size: [],
    Price: [],
  });

  const toggleSection = (section) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const handleCheckboxChange = (section, option) => {
    setSelectedFilters((prev) => {
      const current = prev[section];
      const updated = current.includes(option)
        ? current.filter((item) => item !== option)
        : [...current, option];
      return { ...prev, [section]: updated };
    });
  };

  const filterProducts = (products) => {
    return products.filter((product) => {
      const { Gender, Color, Size, Price } = selectedFilters;

      const priceValue = product.price;

      const priceMatch =
        Price.length === 0 ||
        Price.some((range) => {
          if (range === 'Under ₹500') return priceValue < 500;
          if (range === '₹500 - ₹1000') return priceValue >= 500 && priceValue <= 1000;
          if (range === '₹1000 - ₹2000') return priceValue > 1000 && priceValue <= 2000;
          if (range === 'Above ₹2000') return priceValue > 2000;
          return true;
        });

      return (
        (Gender.length === 0 || Gender.includes(product.gender)) &&
        (Color.length === 0 || Color.includes(product.color)) &&
        (Size.length === 0 || Size.includes(product.size)) &&
        priceMatch
      );
    });
  };

  const filteredProducts = filterProducts(dummyProducts);

  return (
    <>
      {/* Top Navigation */}
      <header className="flex items-center justify-between px-6 py-4 bg-white shadow-sm sticky top-0 z-50">
        <div className="flex items-center gap-8">
          <img src="/logo.png" alt="EcoCys Logo" className="h-7" />
          <input
            type="text"
            placeholder="Search Products Sellers & More..."
            className="border rounded-full px-4 py-2 w-[280px] text-sm text-gray-600 focus:outline-none placeholder-gray-400"
          />
          <nav className="hidden md:flex gap-6 text-sm font-semibold text-gray-700">
            <a href="#">Men</a>
            <a href="#">Women</a>
            <a href="#">Boy</a>
            <a href="#">Girl</a>
            <a href="#">View All</a>
            <Link to="/become-seller" className="hover:text-[#00bcd4]">Become A Seller</Link>
          </nav>
        </div>
        <div className="text-sm font-semibold text-gray-700">
          <a href="#">Login / Sign Up</a>
        </div>
      </header>

      {/* Title Section */}
      <div className="flex items-center justify-between px-6 py-6">
        <div>
          <h2 className="text-2xl font-extrabold text-gray-700">Category Name Here</h2>
          <p className="text-sm text-gray-500">Found {filteredProducts.length.toString().padStart(3, '0')} items</p>
        </div>
        <Link to="/become-seller">
          <button className="bg-[#00bcd4] text-white px-5 py-2 rounded-full font-semibold text-sm shadow-sm hover:bg-[#00aac4] transition">
            Become Seller
          </button>
        </Link>
      </div>

      {/* Main Section */}
      <div className="flex gap-6 px-6 pb-10">
        {/* Filter Section */}
        <div className="w-1/4 bg-white border rounded-xl p-4 shadow-md">
          <h2 className="text-lg font-bold text-gray-700 mb-4">Filter & Search</h2>

          <div className="flex gap-2 mb-4">
            <button
              className="bg-gray-300 text-sm px-3 py-1 rounded font-semibold text-gray-600"
              onClick={() =>
                setSelectedFilters({
                  Gender: [],
                  Color: [],
                  Size: [],
                  Price: [],
                })
              }
            >
              Clear Filters
            </button>
            <button className="text-sm text-white bg-[#00bcd4] px-4 py-1 rounded font-semibold">
              Shrink
            </button>
          </div>

          {/* Accordion Filters */}
          {Object.entries(filtersData).map(([section, options]) => (
            <div
              key={section}
              className="border-t py-3 cursor-pointer"
              onClick={() => toggleSection(section)}
            >
              <div className="flex justify-between items-center font-semibold text-gray-700">
                <span>{section}</span>
                <span className="text-xl">{openSections[section] ? '-' : '+'}</span>
              </div>

              {openSections[section] && (
                <div className="mt-2 space-y-1 text-sm text-gray-600">
                  {options.map((option, idx) => (
                    <label key={idx} className="block cursor-pointer">
                      <input
                        type="checkbox"
                        className="mr-2"
                        checked={selectedFilters[section].includes(option)}
                        onChange={() => handleCheckboxChange(section, option)}
                        onClick={(e) => e.stopPropagation()}
                      />
                      {option}
                    </label>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Product Grid */}
        <div className="w-3/4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredProducts.map((product, idx) => (
            <ProductCard key={idx} {...product} />
          ))}
        </div>
      </div>
    </>
  );
};

export default FindProducts;
