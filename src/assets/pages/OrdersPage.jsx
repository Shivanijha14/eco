import React, { useState } from "react";

const OrdersPage = () => {
  const [activeTab, setActiveTab] = useState("New Orders");

  const tabs = ["New Orders", "Active Orders", "Ready To Ship", "Dispatched", "Completed", "Cancelled"];

  const dummyOrders = {
    "New Orders": [
      { id: "#1001", product: "Laptop", status: "Pending" },
      { id: "#1002", product: "Smartwatch", status: "Pending" },
    ],
    "Active Orders": [
      { id: "#2001", product: "Wireless Earbuds", status: "Processing" },
      { id: "#2002", product: "Tablet", status: "Processing" },
    ],
    "Ready To Ship": [
      { id: "#3001", product: "Gaming Console", status: "Packed" },
      { id: "#3002", product: "Smartphone", status: "Packed" },
    ],
    "Dispatched": [
      { id: "#4001", product: "Headphones", status: "Shipped" },
      { id: "#4002", product: "Monitor", status: "Shipped" },
    ],
    "Completed": [
      { id: "#5001", product: "Mechanical Keyboard", status: "Delivered" },
      { id: "#5002", product: "Mouse", status: "Delivered" },
    ],
    "Cancelled": [
      { id: "#6001", product: "Gaming Mousepad", status: "Cancelled" },
      { id: "#6002", product: "Power Bank", status: "Cancelled" },
    ],
  };

  return (
    <div className="p-6">
      {/* Tabs Section */}
      <div className="flex border-b">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`py-2 px-4 text-sm font-medium ${
              activeTab === tab ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-500"
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Search Box */}
      <div className="mt-4 flex items-center border p-2 rounded-md bg-gray-100 w-96">
        <span className="text-gray-400">🔍</span>
        <input type="text" placeholder="Search by Product Name / SKU ID" className="ml-2 bg-transparent outline-none w-full" />
      </div>

      {/* Orders Box */}
      <div className="mt-4 p-6 bg-white border rounded-md">
        <p className="text-center text-gray-500 text-lg font-semibold">Order Details</p>

        {/* Show Orders Based on Active Tab */}
        <div className="mt-4 space-y-3">
          {dummyOrders[activeTab].map((order) => (
            <div key={order.id} className="p-3 bg-gray-100 rounded-md">
              <p className="text-sm font-semibold">Order {order.id}</p>
              <p className="text-xs text-gray-500">Product: {order.product}</p>
              <p className="text-xs text-gray-500">Status: {order.status}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Managing Orders Box (Black Box) */}
      <div className="mt-4 w-64 p-4 bg-black text-white rounded-md">
        <p className="font-bold text-lg">Managing Orders & Tracking Sales</p>
        <p>Ecocys Seller</p>
        <p>14 Mins</p>
        <span className="text-yellow-500 text-xl">▶</span>
      </div>
    </div>
  );
};

export default OrdersPage;
