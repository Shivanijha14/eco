import React from "react";
import catelogue from "./catelogue.png";
import baby1 from "./baby1.png";
import baby2 from "./baby2.png";
import baby3 from "./baby3.png";
import baby4 from "./baby4.png";
import baby5 from "./baby5.png";
import baby6 from "./baby6.png";

const AddProduct = () => {
  const uploadedImages = [baby1, baby2, baby3, baby4, baby5, baby6];

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-8 flex justify-center">
      <div className="w-full max-w-6xl">
        {/* Heading */}
        <div className="bg-white rounded-xl shadow-md p-6 md:p-8 mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">
            Add Single Product To Your Catalogue
          </h2>

          {/* Category Selection */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <select className="p-3 rounded-lg bg-gray-100 w-full border border-gray-200">
              <option>Select Category</option>
            </select>
            <select className="p-3 rounded-lg bg-gray-100 w-full border border-gray-200">
              <option>Select Subcategory</option>
            </select>
          </div>

          {/* GST & HSN */}
          <div className="bg-white p-4 rounded-lg border border-gray-200 mb-6">
            <h3 className="text-xl font-semibold mb-4">Product Size & Inventory</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              <select className="p-3 rounded-lg bg-gray-100 w-full border border-gray-200">
                <option>GST</option>
              </select>
              <select className="p-3 rounded-lg bg-gray-100 w-full border border-gray-200">
                <option>HSN</option>
              </select>
              <select className="p-3 rounded-lg bg-gray-100 w-full border border-gray-200">
                <option>HSN</option>
              </select>
            </div>
          </div>

          {/* Sizes */}
          <div className="bg-white p-4 rounded-lg border border-gray-200 mb-6">
            <h3 className="text-xl font-semibold mb-4">
              Select Sizes <span className="text-sm text-gray-400">(List From Meesho)</span>
            </h3>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3">
              {["XXXS", "M", "4 XL", "SM", "9 XL", "XL", "S", "5 XL", "LX", "7 XL", "XXL", "L", "6 XL", "10 XL", "8 XL"].map((size) => (
                <label key={size} className="flex items-center whitespace-nowrap">
                  <input type="radio" name="size" className="mr-2" /> {size}
                </label>
              ))}
            </div>
          </div>

          {/* Colors */}
          <div className="bg-white p-4 rounded-lg border border-gray-200 mb-6">
            <h3 className="text-xl font-semibold mb-4">
              Select Colors <span className="text-sm text-gray-400">(List From Meesho)</span>
            </h3>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3">
              {["Red", "Yellow", "Black", "Pink", "Blue", "Violet", "White", "List From Meesho", "Orange", "Grey", "Green"].map((color) => (
                <label key={color} className="flex items-center whitespace-nowrap">
                  <input type="radio" name="color" className="mr-2" /> {color}
                </label>
              ))}
            </div>
          </div>

          {/* Basic Info + Product Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <h3 className="text-xl font-semibold mb-4">Basic Information</h3>
              <div className="space-y-4">
                <input className="p-3 rounded-lg bg-gray-100 w-full border border-gray-200" placeholder="Product Name" />
                <input className="p-3 rounded-lg bg-gray-100 w-full border border-gray-200" placeholder="Enter Weight In Killos" />
                <input className="p-3 rounded-lg bg-gray-100 w-full border border-gray-200" placeholder="MOQ (In Packs)" />
                <input className="p-3 rounded-lg bg-gray-100 w-full border border-gray-200" placeholder="Pieces In 1 Pack" />
                <select className="p-3 rounded-lg bg-gray-100 w-full border border-gray-200">
                  <option>Fabric</option>
                </select>
                <select className="p-3 rounded-lg bg-gray-100 w-full border border-gray-200">
                  <option>Fit Shape</option>
                </select>
              </div>
            </div>

            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <h3 className="text-xl font-semibold mb-4">Product Details</h3>
              <div className="space-y-4">
                <select className="p-3 rounded-lg bg-gray-100 w-full border border-gray-200">
                  <option>Neck Type</option>
                </select>
                <select className="p-3 rounded-lg bg-gray-100 w-full border border-gray-200">
                  <option>Ideal Occasion</option>
                </select>
                <select className="p-3 rounded-lg bg-gray-100 w-full border border-gray-200">
                  <option>Pattern</option>
                </select>
                <select className="p-3 rounded-lg bg-gray-100 w-full border border-gray-200">
                  <option>Sleeve Length</option>
                </select>
                <select className="p-3 rounded-lg bg-gray-100 w-full border border-gray-200">
                  <option>Ships In (Days)</option>
                </select>
                <input className="p-3 rounded-lg bg-gray-100 w-full border border-gray-200" placeholder="Brand If Any" />
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="bg-white p-4 rounded-lg border border-gray-200 mb-6">
            <h3 className="text-xl font-semibold mb-4">Product Description</h3>
            <textarea
              className="w-full p-4 rounded-lg bg-gray-100 border border-gray-200"
              rows="6"
              placeholder="Product Description Here (In 600 Words)"
            ></textarea>
          </div>
        </div>

        {/* Upload Gallery */}
        <div className="bg-white rounded-xl shadow-md p-6 md:p-8 mb-8">
          <h3 className="text-xl font-semibold mb-4 text-center">
            Upload Photos <span className="text-sm text-gray-400">(Minimum 5, Max 10)</span>
          </h3>
          <div className="bg-gray-50 rounded-lg p-6 text-center border border-gray-200">
            <div className="flex justify-center mb-4">
              <img src={catelogue} alt="Upload Icon" className="h-16" />
            </div>
            <p className="font-semibold text-lg">Upload Clear Images</p>
            <p className="text-sm text-gray-500 mb-4">Only JPEG / PNG / JPG File. Max Size 8 MB</p>
            <button className="bg-gray-300 px-6 py-2 rounded-full mb-6 mx-auto hover:bg-gray-400 transition">
              Upload Now
            </button>
            <div className="flex flex-wrap justify-center gap-4">
              {uploadedImages.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt={`Uploaded ${i + 1}`}
                  className="w-20 h-24 rounded-lg object-cover shadow border border-gray-200"
                />
              ))}
            </div>
          </div>
        </div>

        {/* Upload Main Product Image */}
        <div className="bg-white rounded-xl shadow-md p-6 md:p-8 mb-8">
          <h3 className="text-xl font-semibold mb-4 text-center">Upload Main Product Image</h3>
          <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-6">
              <img
                src={baby1}
                alt="Main Product"
                className="w-32 h-40 rounded-lg object-cover shadow border border-gray-200"
              />
              <div className="text-center md:text-left">
                <div className="flex justify-center md:justify-start mb-2">
                  <img src={catelogue} alt="Upload Icon" className="h-10" />
                </div>
                <p className="font-semibold">Upload Clear Image</p>
                <button className="mt-2 bg-gray-500 text-white px-6 py-2 rounded-full hover:bg-gray-600 transition">
                  Upload Now
                </button>
              </div>
            </div>
            <input
              type="text"
              placeholder="Price Per Pack (INR)"
              className="w-full max-w-md p-3 rounded-lg bg-white border border-gray-200 mb-4 mx-auto block"
            />
            <button className="bg-cyan-500 text-white px-6 py-3 rounded-full font-semibold w-full max-w-md mx-auto block hover:bg-cyan-600 transition">
              Submit For Verification
            </button>
          </div>
        </div>

        {/* Inventory Video Section */}
        <div className="bg-black text-white rounded-xl shadow-md p-6 md:p-8 flex flex-col sm:flex-row items-center gap-6 justify-between">
          <div className="flex items-center gap-6">
            <div className="flex-shrink-0">
              <button className="bg-yellow-400 w-16 h-16 rounded-full flex items-center justify-center hover:bg-yellow-500 transition">
                <svg xmlns="http://www.w3.org/2000/svg" fill="black" viewBox="0 0 24 24" width="28" height="28">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </button>
            </div>
            <div>
              <p className="text-xl font-bold">Inventory Management</p>
              <p className="text-sm">5 Mins Tutorial</p>
            </div>
          </div>
          <button className="bg-white text-black px-6 py-2 rounded-full font-medium hover:bg-gray-100 transition">
            Watch Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;