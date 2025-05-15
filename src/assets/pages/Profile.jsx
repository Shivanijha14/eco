import React from "react";
import { Lock, Pencil } from "lucide-react";
import shop from "./shop.png";

const Profile = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4 py-10">
      <div className="w-full max-w-md space-y-6">
        {/* Account Status aligned left */}
        <div className="flex justify-start">
          <p className="text-sm font-medium text-gray-700">
            Account Status:{" "}
            <span className="text-green-600 font-semibold">Active</span>
          </p>
        </div>

        {/* Store Image with Pencil Icon */}
        <div className="relative flex justify-center">
          <img
            src={shop}
            alt="Store"
            className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-md"
          />
          <div className="absolute bottom-1 right-32 bg-white rounded-full p-1 shadow-sm cursor-pointer">
            <Pencil size={16} className="text-gray-600" />
          </div>
        </div>

        {/* Info Section */}
        <div className="space-y-3 text-sm font-medium text-gray-700">
          <input
            type="text"
            value="Bhagwati Vastralay"
            readOnly
            className="w-full px-4 py-2 rounded-full bg-white text-center shadow-sm"
          />

          <div className="flex items-center">
            <input
              type="text"
              value="07AXVPV8453E"
              readOnly
              className="w-full px-4 py-2 rounded-full bg-white text-center shadow-sm"
            />
            <Lock className="text-gray-400 ml-2" size={16} />
          </div>

          <div className="flex items-center">
            <input
              type="text"
              value="3rd Floor, A64, Sector 63, Noida"
              readOnly
              className="w-full px-4 py-2 rounded-full bg-white text-center shadow-sm"
            />
            <Lock className="text-gray-400 ml-2" size={16} />
          </div>

          <input
            type="text"
            value="201301"
            readOnly
            className="w-full px-4 py-2 rounded-full bg-white text-center shadow-sm"
          />

          <div className="flex items-center">
            <input
              type="text"
              value="HSN Code"
              readOnly
              className="w-full px-4 py-2 rounded-full bg-white text-center shadow-sm"
            />
            <Lock className="text-gray-400 ml-2" size={16} />
          </div>

          <input
            type="email"
            value="Orders@ecocys.com"
            readOnly
            className="w-full px-4 py-2 rounded-full bg-white text-center shadow-sm"
          />

          <div className="flex items-center">
            <input
              type="text"
              value="9999999999"
              readOnly
              className="w-full px-4 py-2 rounded-full bg-white text-center shadow-sm"
            />
            <Lock className="text-gray-400 ml-2" size={16} />
          </div>

          <input
            type="password"
            value="************"
            readOnly
            className="w-full px-4 py-2 rounded-full bg-white text-center shadow-sm"
          />
        </div>

        {/* Update Button */}
        <button className="w-full bg-cyan-600 text-white font-semibold py-3 rounded-full hover:bg-cyan-700 transition">
          Update Details
        </button>
      </div>
    </div>
  );
};

export default Profile;
