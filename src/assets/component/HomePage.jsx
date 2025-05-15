// src/assets/component/HomePage.jsx
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import logo from "../logo.png";
import TopProduct from './TopProduct';
import NewProducts from './Newproducts';
import TrendingProducts from './TrendingProducts';
import sellerImg from './image.png';

const HomePage = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="font-sans">
      {/* Header */}
      <header className="flex flex-col md:flex-row items-center justify-between p-4 shadow-md rounded-2xl gap-4">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src={logo} alt="EcoCys Logo" className="h-10 w-auto" />
        </div>

        {/* Search Bar */}
        <input
          type="text"
          placeholder="Search Products Sellers & More..."
          className="border rounded-md px-4 py-2 w-full max-w-md"
        />

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Navigation */}
        <nav
          className={`w-full md:w-auto flex-col md:flex-row md:flex flex-wrap items-center justify-center md:justify-end gap-3 text-sm text-gray-700 transition-all duration-300 ease-in-out ${
            isMobileMenuOpen ? 'flex' : 'hidden md:flex'
          }`}
        >
          <a href="#" className="hover:text-purple-600 transition">Men</a>
          <a href="#" className="hover:text-purple-600 transition">Women</a>
          <a href="#" className="hover:text-purple-600 transition">Boy</a>
          <a href="#" className="hover:text-purple-600 transition">Girl</a>
          <a href="#" className="hover:text-purple-600 transition">View All</a>
          <a href="#" className="hover:text-purple-600 transition">Become A Seller</a>
          <a href="#" className="hover:text-purple-600 transition">Login / Sign Up</a>
        </nav>
      </header>

      {/* Hero Banner */}
      <section className="bg-gray-200 h-60 rounded-2xl m-4" />

      {/* Product Sections */}
      <TopProduct />
      <NewProducts />
      <TrendingProducts />

      {/* Become A Seller Section */}
      <section className="my-10 px-4 flex justify-center">
        <img
          src={sellerImg}
          alt="Become a Seller"
          className="rounded-3xl w-full max-w-4xl object-cover"
        />
      </section>

      {/* Footer */}
      <footer className="py-6 mt-10 border-t">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 text-sm text-gray-700">
          <div>
            <h4 className="mb-2 font-bold">Explore</h4>
            <a href="#">Top Products</a><br />
            <a href="#">Trending Products</a><br />
            <a href="#">New Products</a><br />
            <a href="#">Find Vendors</a><br />
            <a href="#">Post Requirements</a><br />
            <a href="#">View All</a>
          </div>
          <div>
            <h4 className="mb-2 font-bold">Seller</h4>
            <a href="#">Become A Seller</a><br />
            <a href="#">Add Products</a><br />
            <a href="#">Manage Products</a><br />
            <a href="#">My Profile</a><br />
            <a href="#">Orders</a><br />
            <a href="#">Payments</a><br />
            <a href="#">Dashboard</a>
          </div>
          <div>
            <h4 className="mb-2 font-bold">Quick Links</h4>
            <a href="#">Help & Support</a><br />
            <a href="#">About Ecocys</a><br />
            <a href="#">FAQs</a><br />
            <a href="#">Privacy Policy</a><br />
            <a href="#">Refund Policy</a><br />
            <a href="#">Terms Of Use</a>
          </div>
          <div>
            <h4 className="mb-2 font-bold">User</h4>
            <a href="#">My Cart</a><br />
            <a href="#">My Wishlist</a><br />
            <a href="#">My Account</a><br />
            <a href="#">Help & Support</a>
          </div>
          <div>
            <h4 className="mb-2 font-bold">Social</h4>
            <a href="#">Instagram</a><br />
            <a href="#">Facebook</a><br />
            <a href="#">YouTube</a><br />
            <a href="#">Twitter</a>
          </div>
        </div>
        <p className="text-center text-xs text-gray-500 mt-6">
          Copyright 2025 By EcoCys. All Rights Reserved
        </p>
      </footer>
    </div>
  );
};

export default HomePage;
