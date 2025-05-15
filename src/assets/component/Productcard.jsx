// src/assets/component/ProductCard.jsx

import React from 'react';

const ProductCard = ({ id, name, seller, price, image, tag }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-2 relative">
      <div className="absolute top-2 left-2 bg-gray-200 text-xs px-2 py-1 rounded-full z-10">
        {tag}
      </div>
      <img src={image} alt={name} className="w-full h-48 object-cover rounded" />
      <p className="text-xs text-gray-400 mt-1">#{id}</p>
      <h4 className="font-medium text-sm mt-1">{name}</h4>
      <p className="text-sm text-gray-600">Sold By {seller}</p>
      <p className="font-semibold text-sm mt-1">{price}/- Per Pack</p>
    </div>
  );
};

// ✅ Dummy Product Data
export const dummyProducts = Array(8).fill(0).map((_, i) => ({
  id: 65869236 + i,
  name: "Stylish Glamorous Men Shirts",
  seller: "Wholesaler",
  price: 500 + i * 20,
  image: "https://assets.meesho.com/images/products/152185412/zbp1s_512.webp",
  tag: ["Recently Added", "Top Rated", "Trending", "TOP Pick Of Day"][i % 4]
}));

export default ProductCard;
