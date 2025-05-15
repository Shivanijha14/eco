import React from "react";
import { CloudUpload } from "lucide-react";
import catelogue from "./catelogue.png";

const MultipleProducts = () => {
  return (
    <div className="min-h-screen bg-white px-4 py-6 sm:py-10 flex items-center justify-center">
      <div className="w-full max-w-2xl mx-auto text-center space-y-6 sm:space-y-8">
        {/* Page Title */}
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 px-2">
          Add Multiple Products To Your Catalogue
        </h2>

        {/* Upload Box */}
        <div className="bg-gray-100 p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl md:rounded-3xl shadow-sm space-y-4 sm:space-y-6">
          {/* Subtitle */}
          <h3 className="text-sm sm:text-md font-semibold text-gray-700 text-left sm:text-center">
            Upload Catalogue (Upto 50 Products)
          </h3>

          {/* Cloud Upload Icon */}
          <div className="flex justify-center py-2 sm:py-4">
            <CloudUpload size={60} className="sm:w-16 sm:h-16 md:w-20 md:h-20 text-blue-500" />
          </div>

          {/* Instructions */}
          <div className="space-y-1 sm:space-y-2 text-center">
            <p className="text-xs sm:text-sm font-medium sm:font-semibold text-gray-600">
              Upload Catalogue File
            </p>
            <p className="text-xs text-gray-500">
              Only CSV File. Max Size 8 MB
            </p>
            <p className="text-xs text-gray-500 px-4 sm:px-0">
              You can add product images later From Manage Section
            </p>
          </div>

          {/* Upload Now Button */}
          <div className="pt-2 sm:pt-4 text-center">
            <button className="bg-cyan-600 text-white text-xs sm:text-sm px-4 py-1.5 sm:py-2 rounded-md hover:bg-cyan-700 transition">
              Upload Now
            </button>
          </div>

          {/* Download Template */}
          <p className="text-xs sm:text-sm font-medium text-gray-700 underline cursor-pointer text-center">
            Download Template
          </p>

          {/* Continue Button */}
          <div className="pt-3 sm:pt-6 text-center">
            <button className="bg-cyan-600 text-white text-sm px-6 py-2 sm:py-2.5 rounded-md font-medium hover:bg-cyan-700 transition w-full sm:w-auto">
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MultipleProducts;