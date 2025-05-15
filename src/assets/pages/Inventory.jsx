import React, { useState } from "react";

const Inventory = () => {
  const [activeTab, setActiveTab] = useState("Active");

  const tabs = ["Active", "Review", "Saved", "Inactive", "Paused"];
  const dummyData = [
    { id: 1, name: "Product A", status: "Active" },
    { id: 2, name: "Product B", status: "Review" },
    { id: 3, name: "Product C", status: "Saved" },
    { id: 4, name: "Product D", status: "Inactive" },
    { id: 5, name: "Product E", status: "Paused" },
    { id: 6, name: "Product F", status: "Active" },
    { id: 7, name: "Product G", status: "Active" },
  ];

  return (
    <div className="p-6 bg-gray-100 min-h-screen flex flex-col items-center">
      {/* Main Content Box */}
      <div className="bg-white shadow-md rounded-md p-6 w-full max-w-5xl mb-4">
        {/* Header Tabs */}
        <div className="flex space-x-6 border-b pb-2 overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`py-2 px-4 text-lg font-semibold whitespace-nowrap ${
                activeTab === tab
                  ? "text-blue-500 border-b-2 border-blue-500"
                  : "text-gray-500"
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Search Bar */}
        <div className="mt-4">
          <input
            type="text"
            placeholder="Search By Product Name / SKU ID"
            className="w-full p-3 border rounded-md"
          />
        </div>

        {/* Data Section */}
        <div className="mt-6 p-4 border rounded-md min-h-[300px]">
          <h2 className="text-center text-gray-600 text-lg font-semibold mb-4">
            {dummyData.some((item) => item.status === activeTab)
              ? "Product Details"
              : "Nothing To Show Here....."}
          </h2>
          <ul className="space-y-3">
            {dummyData
              .filter((item) => item.status === activeTab)
              .map((item) => (
                <li
                  key={item.id}
                  className="p-3 bg-gray-100 rounded shadow-sm hover:bg-gray-200 transition"
                >
                  {item.name}
                </li>
              ))}
          </ul>
        </div>
      </div>

      {/* Black Box aligned to left */}
      <div className="w-full max-w-5xl">
        <div className="bg-black text-white p-4 rounded-md w-full sm:w-80">
          <h3 className="text-lg font-bold">
            Managing Orders & Tracking Sales On Ecocys Seller
          </h3>
          <p className="mt-2">14 Mins</p>
          <button className="mt-4 bg-yellow-400 text-black px-3 py-2 rounded-full">▶</button>
        </div>
      </div>
    </div>
  );
};

export default Inventory;
