import React, { useState, useRef } from 'react';
import { Menu, X, ChevronLeft, ChevronRight } from 'lucide-react';
import logo from '../logo.png';
import shirt from './shirtimage.png';

const ProductView = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const thumbnails = ['./baby4.png', './baby3.png', './baby2.png', './baby6.png'];
  const [mainImage, setMainImage] = useState(thumbnails[0]);

  const colorOptions = [
    { name: 'Orange', color: 'bg-orange-500' },
    { name: 'Black', color: 'bg-black' },
    { name: 'Green', color: 'bg-green-500' },
    { name: 'Gray', color: 'bg-gray-500' },
    { name: 'Cyan', color: 'bg-cyan-500' },
    { name: 'Yellow', color: 'bg-yellow-500' },
  ];

  const [selectedColor, setSelectedColor] = useState('Orange');
  const [quantities, setQuantities] = useState(
    colorOptions.reduce((acc, { name }) => ({ ...acc, [name]: 1 }), {})
  );
  const [selectedSize, setSelectedSize] = useState(null);

  const handleQuantityChange = (colorName, change) => {
    setQuantities(prev => ({
      ...prev,
      [colorName]: Math.max(0, prev[colorName] + change),
    }));
  };

  const sizes = [
    '0–3 Months', '0–6 Months', '3–6 Months',
    '6–9 Months', '9–12 Months', '12–18 Months',
    '18–24 Months', '2–3 Years', '3–4 Years',
  ];

  const scrollRef = useRef();
  
  const scroll = (direction) => {
    const { current } = scrollRef;
    if (direction === 'left') {
      current.scrollBy({ left: -250, behavior: 'smooth' });
    } else {
      current.scrollBy({ left: 250, behavior: 'smooth' });
    }
  };

  const products = Array(12).fill({
    name: 'Stylish Glamorous Men Shirts',
    seller: 'Wholesaler',
    price: '500/- Per Pack',
    image: shirt,
  });

  const RatingSection = () => {
    const [rating, setRating] = useState(0);
    const [reviewType, setReviewType] = useState("");
    const [reviewText, setReviewText] = useState("");
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log({ rating, reviewType, reviewText });
      alert("Review submitted!");
    };
  
    return (
      <div className="bg-white rounded-lg shadow-md p-6 m-4 relative overflow-hidden">
        {/* Diagonal line overlay */}
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `
              linear-gradient(
                135deg,
                rgba(0,0,0,0.05) 25%,
                transparent 25%,
                transparent 50%,
                rgba(0,0,0,0.05) 50%,
                rgba(0,0,0,0.05) 75%,
                transparent 75%,
                transparent
              )`,
            backgroundSize: '20px 20px'
          }}
        ></div>
        
        <h2 className="text-xl font-semibold mb-4 relative z-10">Rate This Product</h2>
        <form onSubmit={handleSubmit} className="space-y-4 relative z-10">
          <div>
            <label className="block text-gray-700 font-medium mb-1">Select Your Review</label>
            <select
              className="w-full rounded-full px-4 py-2 border border-gray-300 focus:outline-none"
              value={reviewType}
              onChange={(e) => setReviewType(e.target.value)}
              required
            >
              <option value="">Select</option>
              <option value="Informative">Informative</option>
              <option value="Helpful">Helpful</option>
              <option value="Boring">Boring</option>
              <option value="Interesting">Interesting</option>
            </select>
          </div>
  
          <div>
            <label className="block text-gray-700 font-medium mb-1">Write In Brief</label>
            <textarea
              className="w-full rounded-xl p-3 border border-gray-300 focus:outline-none"
              rows="3"
              placeholder="Write Here!"
              value={reviewText}
              onChange={(e) => setReviewText(e.target.value)}
              required
            ></textarea>
          </div>
  
          <div>
            <label className="block text-gray-700 font-medium mb-1">Star's</label>
            <div className="flex items-center space-x-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  onClick={() => setRating(star)}
                  className="text-2xl"
                >
                  {star <= rating ? '★' : '☆'}
                </button>
              ))}
            </div>
          </div>
  
          <button
            type="submit"
            className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-2 rounded-full mt-2"
          >
            Submit
          </button>
        </form>
      </div>
    );
  };
  const ReviewsSection = () => {
    const reviews = [
      {
        rating: 4.0,
        seller: "Bhagwati Vastralaya",
        comment: "Good Cloth Quality But Poor Packaging"
      },
      {
        rating: 4.0,
        seller: "Bhagwati Vastralaya",
        comment: "Good Cloth Quality But Poor Packaging"
      }
    ];

    return (
      <div className="bg-white rounded-lg shadow-md p-6 m-4 relative overflow-hidden">
        {/* Diagonal line overlay */}
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `
              linear-gradient(
                135deg,
                rgba(0,0,0,0.05) 25%,
                transparent 25%,
                transparent 50%,
                rgba(0,0,0,0.05) 50%,
                rgba(0,0,0,0.05) 75%,
                transparent 75%,
                transparent
              )`,
            backgroundSize: '20px 20px'
          }}
        ></div>
        
        <h2 className="text-xl font-semibold mb-4 relative z-10">Reviews</h2>
        <div className="space-y-4 relative z-10">
          {reviews.map((review, index) => (
            <div key={index} className="border-b pb-4 last:border-b-0">
              <div className="flex items-center gap-2">
                <span className="font-bold">{review.rating}</span>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400">
                      {i < Math.floor(review.rating) ? '★' : '☆'}
                    </span>
                  ))}
                </div>
              </div>
              <p className="font-semibold mt-1">{review.seller}</p>
              <p className="text-gray-600">{review.comment}</p>
            </div>
          ))}
        </div>
        <button className="text-cyan-500 font-medium mt-4 hover:text-cyan-600 transition relative z-10">
          View All Reviews
        </button>
      </div>
    );
  };

  return (
    <div className="font-sans bg-gray-50">
      {/* Header */}
      <header className="flex flex-col md:flex-row items-center justify-between p-4 shadow-md rounded-2xl gap-4 bg-white">
        <div className="flex items-center gap-2">
          <img src={logo} alt="EcoCys Logo" className="h-10 w-auto" />
        </div>
        <input
          type="text"
          placeholder="Search Products Sellers & More..."
          className="border rounded-md px-4 py-2 w-full max-w-md focus:outline-none focus:ring-2 focus:ring-teal-500"
        />
        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        <nav
          className={`w-full md:w-auto flex-col md:flex-row md:flex flex-wrap items-center justify-center md:justify-end gap-3 text-sm text-gray-700 transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'flex' : 'hidden md:flex'}`}
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

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Thumbnail Images */}
          <div className="flex lg:flex-col gap-2 order-1 lg:order-none overflow-x-auto lg:overflow-x-visible pb-2 lg:pb-0">
            {thumbnails.map((thumb, idx) => (
              <img
                key={idx}
                src={thumb}
                alt={`Thumbnail ${idx + 1}`}
                onClick={() => setMainImage(thumb)}
                className="w-16 h-16 lg:w-20 lg:h-20 cursor-pointer object-cover rounded-md hover:ring-2 hover:ring-teal-500 transition-all duration-150"
              />
            ))}
          </div>

          {/* Main Product Image */}
          <div className="flex-grow flex justify-center order-3 lg:order-none">
            <img 
              src={mainImage} 
              alt="Main Product" 
              className="w-full max-w-md object-contain h-96 rounded-lg shadow-sm" 
            />
          </div>

          {/* Product Info */}
          <div className="space-y-6 order-2 lg:order-none lg:w-1/2">
            <div>
              <h1 className="text-2xl font-bold text-gray-800">JX Adorable Blue Kitty Print Dungarees</h1>
              <p className="text-xl text-teal-600 font-medium mt-1">INR 500/-</p>
            </div>

            {/* Color and Quantity Selection */}
            <div>
              <h2 className="font-semibold text-lg mb-3">Select Quantities</h2>
              <div className="grid grid-cols-2 gap-3">
                {colorOptions.map(({ name, color }, idx) => (
                  <div
                    key={idx}
                    onClick={() => setSelectedColor(name)}
                    className={`flex items-center gap-2 p-2 rounded-lg cursor-pointer transition-all ${selectedColor === name ? 'bg-teal-50 ring-2 ring-teal-500' : 'hover:bg-gray-100'}`}
                  >
                    <div className={`w-5 h-5 rounded-full ${color}`} />
                    <div className="flex items-center gap-2 ml-auto">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleQuantityChange(name, -1);
                        }}
                        className="w-6 h-6 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center"
                      >−</button>
                      <span className="w-8 text-center">{quantities[name]}</span>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleQuantityChange(name, 1);
                        }}
                        className="w-6 h-6 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center"
                      >+</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Size Selection */}
            <div>
              <h2 className="font-semibold text-lg mb-3">Select Size</h2>
              <div className="grid grid-cols-3 gap-2">
                {sizes.map((size, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedSize(size)}
                    className={`px-3 py-2 rounded-full text-sm hover:bg-gray-100 transition ${selectedSize === size ? 'bg-teal-600 text-white hover:bg-teal-700' : 'bg-gray-50'}`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 pt-2">
              <button className="bg-teal-600 text-white px-6 py-3 rounded-lg hover:bg-teal-700 transition flex-grow">
                Add To Cart
              </button>
              <button className="bg-gray-500 text-white px-6 py-3 rounded-lg hover:bg-gray-600 transition flex-grow">
                Add To Wishlist
              </button>
            </div>

            {/* Product Details */}
            <div className="mt-6 text-gray-700 space-y-2">
              <h3 className="font-bold text-lg">Product Details:</h3>
              <ul className="list-disc ml-5 space-y-1">
                <li>Name: JX Adorable Blue Kitty Print Dungarees (0–2 Years)</li>
                <li>Fabric: Cotton</li>
                <li>Category: Boy</li>
                <li>GST: 5%</li>
                <li>Added On: 12th February 2025</li>
                <li>Pattern: Printed</li>
                <li>MOQ: 39 Packs (Each pack contains 10 items)</li>
              </ul>
              <p className="pt-2">Dress your little one in comfort and style...</p>
              <p>Featuring an adorable kitty print...</p>
              <p>Perfect for playdates, outings, or casual wear...</p>
              <p className="pt-2">
                State: Surat, Gujarat<br />
                Average Delivery Time: 1 Month<br />
                Sold By: ALPHA MANGO, Surat
              </p>
            </div>
          </div>
        </div>

        {/* Rate This Product Section */}
        <RatingSection />

        {/* Reviews Section */}
        <ReviewsSection />

        {/* Top Products Section */}
        <section className="mt-16 relative">
          <h2 className="text-2xl font-semibold mb-8 text-center">Top Products</h2>
          <div className="relative">
            {/* Left Arrow */}
            <button
              onClick={() => scroll('left')}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-2 hover:bg-gray-100 transition"
            >
              <ChevronLeft size={24} />
            </button>

            {/* Scrollable Product List */}
            <div
              ref={scrollRef}
              className="flex overflow-x-auto gap-6 px-8 scroll-smooth no-scrollbar pb-4"
            >
              {products.map((product, index) => (
                <div key={index} className="min-w-[180px] w-48 flex-shrink-0 bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-contain p-4"
                  />
                  <div className="p-4">
                    <p className="font-medium text-sm line-clamp-2">{product.name}</p>
                    <p className="text-gray-500 text-xs mt-1">Sold By {product.seller}</p>
                    <p className="mt-2 font-semibold">{product.price}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Right Arrow */}
            <button
              onClick={() => scroll('right')}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-2 hover:bg-gray-100 transition"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-white py-12 mt-16 border-t">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 text-sm">
            <div>
              <h4 className="mb-4 font-bold text-gray-800">Explore</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-teal-600 transition">Top Products</a></li>
                <li><a href="#" className="text-gray-600 hover:text-teal-600 transition">Trending Products</a></li>
                <li><a href="#" className="text-gray-600 hover:text-teal-600 transition">New Products</a></li>
                <li><a href="#" className="text-gray-600 hover:text-teal-600 transition">Find Vendors</a></li>
                <li><a href="#" className="text-gray-600 hover:text-teal-600 transition">Post Requirements</a></li>
                <li><a href="#" className="text-gray-600 hover:text-teal-600 transition">View All</a></li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4 font-bold text-gray-800">Seller</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-teal-600 transition">Become A Seller</a></li>
                <li><a href="#" className="text-gray-600 hover:text-teal-600 transition">Add Products</a></li>
                <li><a href="#" className="text-gray-600 hover:text-teal-600 transition">Manage Products</a></li>
                <li><a href="#" className="text-gray-600 hover:text-teal-600 transition">My Profile</a></li>
                <li><a href="#" className="text-gray-600 hover:text-teal-600 transition">Orders</a></li>
                <li><a href="#" className="text-gray-600 hover:text-teal-600 transition">Payments</a></li>
                <li><a href="#" className="text-gray-600 hover:text-teal-600 transition">Dashboard</a></li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4 font-bold text-gray-800">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-teal-600 transition">Help & Support</a></li>
                <li><a href="#" className="text-gray-600 hover:text-teal-600 transition">About Ecocys</a></li>
                <li><a href="#" className="text-gray-600 hover:text-teal-600 transition">FAQs</a></li>
                <li><a href="#" className="text-gray-600 hover:text-teal-600 transition">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-600 hover:text-teal-600 transition">Refund Policy</a></li>
                <li><a href="#" className="text-gray-600 hover:text-teal-600 transition">Terms Of Use</a></li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4 font-bold text-gray-800">User</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-teal-600 transition">My Cart</a></li>
                <li><a href="#" className="text-gray-600 hover:text-teal-600 transition">My Wishlist</a></li>
                <li><a href="#" className="text-gray-600 hover:text-teal-600 transition">My Account</a></li>
                <li><a href="#" className="text-gray-600 hover:text-teal-600 transition">Help & Support</a></li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4 font-bold text-gray-800">Social</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-teal-600 transition">Instagram</a></li>
                <li><a href="#" className="text-gray-600 hover:text-teal-600 transition">Facebook</a></li>
                <li><a href="#" className="text-gray-600 hover:text-teal-600 transition">YouTube</a></li>
                <li><a href="#" className="text-gray-600 hover:text-teal-600 transition">Twitter</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 text-center text-gray-500 text-sm">
            <p>Copyright © 2025 By EcoCys. All Rights Reserved</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ProductView;