import React, { useState } from 'react';
import shirtImage from './shirtimage.png';
import { Menu, X } from 'lucide-react';
import logo from "../logo.png";

const ProductCard = ({ type = 'cart' }) => {
  const handleRemove = () => alert(`Item removed from ${type}`);
  const handleAddToCart = () => alert('Item added to cart');

  return (
    <div className="w-full sm:w-[150px] p-2 flex flex-col items-center rounded shadow-sm bg-white">
      <div className="relative w-full sm:w-[100px] h-[120px] bg-gray-200 rounded overflow-hidden">
        <div className="absolute top-0 left-0 bg-black text-white text-[10px] px-1 rounded-tr">Recently Added</div>
        <img src={shirtImage} alt="Shirt" className="object-contain h-full w-full" />
      </div>
      <div className="text-center mt-2 text-sm w-full">
        <p className="font-medium truncate">Stylish Glamorous Men Shirts</p>
        <p className="text-xs text-gray-500">Sold by: Wholesale</p>
        <p className="text-xs font-semibold">₹500 / Per Pack</p>
        {type === 'cart' ? (
          <button onClick={handleRemove} className="bg-gray-300 text-sm px-3 py-1 mt-2 rounded hover:bg-gray-400 transition-colors">Remove</button>
        ) : (
          <div className="flex gap-2 mt-2">
            <button onClick={handleRemove} className="bg-gray-300 text-sm px-3 py-1 rounded hover:bg-gray-400 transition-colors">Remove</button>
            <button onClick={handleAddToCart} className="bg-sky-500 text-white text-sm px-3 py-1 rounded hover:bg-sky-600 transition-colors">Add to Cart</button>
          </div>
        )}
      </div>
    </div>
  );
};

const SummaryCard = () => {
  const handleCheckout = () => alert('Proceeding to checkout...');
  const scrollToWishlist = () => document.getElementById('wishlist-section')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <div className="p-4 w-full sm:w-[300px] rounded shadow-sm bg-white">
      <h2 className="text-lg font-semibold mb-4">Cart Subtotal</h2>
      <div className="text-sm space-y-2">
        {['GST', 'Shipping & Delivery', '1% TCS', 'Discount'].map((item) => (
          <div key={item} className="flex justify-between">
            <span>{item}:</span>
            <span>INR 0/-</span>
          </div>
        ))}
        <hr />
        <div className="flex justify-between font-bold">
          <span>Cart Subtotal:</span>
          <span>INR 0/-</span>
        </div>
      </div>
      <button onClick={handleCheckout} className="bg-sky-500 text-white px-4 py-2 mt-4 w-full rounded hover:bg-sky-600 transition-colors">Proceed For Checkout</button>
      <button onClick={scrollToWishlist} className="bg-gray-600 text-white px-4 py-2 mt-2 w-full rounded hover:bg-gray-700 transition-colors">Scroll To Wishlist</button>
    </div>
  );
};

const UserCartWishlist = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="font-sans bg-gray-50 text-gray-800 min-h-screen">
      <header className="flex flex-col md:flex-row items-center justify-between p-4 shadow-md rounded-2xl gap-4 bg-white">
        <div className="flex items-center gap-2">
          <img src={logo} alt="EcoCys Logo" className="h-10 w-auto" />
        </div>
        <input type="text" placeholder="Search Products Sellers & More..." className="border rounded-md px-4 py-2 w-full max-w-md" />
        <button className="md:hidden text-gray-700" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        <nav className={`w-full md:w-auto flex-col md:flex-row md:flex items-center justify-center md:justify-end gap-3 text-sm text-gray-700 transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'flex' : 'hidden md:flex'}`}>
          {['Men', 'Women', 'Boy', 'Girl', 'View All', 'Become A Seller', 'Login / Sign Up'].map((item) => (
            <a key={item} href="#" className="hover:text-purple-600 transition">{item}</a>
          ))}
        </nav>
      </header>

      <main className="max-w-7xl mx-auto px-4">
        <section className="py-8">
          <h2 className="text-2xl font-bold mb-1">My Cart</h2>
          <p className="text-sm text-gray-500 mb-4">Found 000 Items</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {[...Array(3)].map((_, i) => <ProductCard key={i} />)}
            </div>
            <div className="w-full sm:w-auto">
              <SummaryCard />
            </div>
          </div>
        </section>

        <section id="wishlist-section" className="py-8 bg-white rounded-lg mt-4">
          <h2 className="text-2xl font-bold mb-1 px-4">My Wishlist</h2>
          <p className="text-sm text-gray-500 mb-4 px-4">Found 000 Items</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 px-4">
            {[...Array(6)].map((_, i) => <ProductCard key={i} type="wishlist" />)}
          </div>
        </section>
      </main>

      <footer className="py-6 mt-10 border-t bg-white">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 text-sm text-gray-700">
          {[
            {
              title: 'Explore',
              links: ['Top Products', 'Trending Products', 'New Products', 'Find Vendors', 'Post Requirements', 'View All']
            },
            {
              title: 'Seller',
              links: ['Become A Seller', 'Add Products', 'Manage Products', 'My Profile', 'Orders', 'Payments', 'Dashboard']
            },
            {
              title: 'Quick Links',
              links: ['Help & Support', 'About Ecocys', 'FAQs', 'Privacy Policy', 'Refund Policy', 'Terms Of Use']
            },
            {
              title: 'User',
              links: ['My Cart', 'My Wishlist', 'My Account', 'Help & Support']
            },
            {
              title: 'Social',
              links: ['Instagram', 'Facebook', 'YouTube', 'Twitter']
            },
          ].map(({ title, links }) => (
            <div key={title}>
              <h4 className="mb-2 font-bold">{title}</h4>
              {links.map((link) => <a key={link} href="#" className="block py-1 hover:underline">{link}</a>)}
            </div>
          ))}
        </div>
        <p className="text-center text-xs text-gray-500 mt-6">Copyright 2025 By EcoCys. All Rights Reserved</p>
      </footer>
    </div>
  );
};

export default UserCartWishlist;