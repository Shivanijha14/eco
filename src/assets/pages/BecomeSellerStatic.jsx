import React, { useState } from "react";
import logo from "../logo.png";
import flipkartsellerlogo from "../flipkart seller logo.png";
import dummyimage from "./dummy image.jpg";
import sellerImage from "./image.png";

const BecomeSellerStatic = () => {
  const [activeTab, setActiveTab] = useState("manufacturer");
  const [mobileNumber, setMobileNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  const handleSendOtp = () => {
    if (mobileNumber.length === 10) {
      setOtpSent(true);
      // In a real app, you would send the OTP to the user's mobile here
    }
  };

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "How To Add Products On EcoCys?",
      answer: "You can add products through your seller dashboard by clicking 'Add Product' and filling in all required details."
    },
    {
      question: "How To Manage Addresses?",
      answer: "Manage your business addresses in the 'My Profile' section of your seller dashboard."
    },
    {
      question: "Changing My Profile Information",
      answer: "Update your profile anytime in 'Account Settings'. Some changes may require verification."
    },
    {
      question: "Add Bulk Products",
      answer: "Use our bulk upload feature with our CSV template to add multiple products at once."
    },
    {
      question: "How To Withdraw Funds?",
      answer: "Withdraw funds to your registered bank account after the 7-10 day settlement period."
    }
  ];

  const benefits = [
    {
      title: "UNLOCK NATIONWIDE SALES",
      description: "Reach 50k Retailers Across 1,000+ Pincodes!",
      icon: "🌐"
    },
    {
      title: "MAXIMIZE YOUR PROFITS",
      description: "Enjoy 0% Commission and Keep 100% of Your Earnings!",
      icon: "💰"
    },
    {
      title: "EXPERT ACCOUNT MANAGEMENT",
      description: "Dedicated team to Boost Your EcoCys Success!",
      icon: "👔"
    },
    {
      title: "ZERO RETURN CHARGES",
      description: "Ship Your Products Stress-Free with Flat, Low Rates!",
      icon: "🚚"
    },
    {
      title: "24/7 SUPPORT",
      description: "Your Questions, Our Priority—Anytime, Anywhere!",
      icon: "🛎️"
    },
    {
      title: "RAPID REVENUE",
      description: "Unlock Your Payments in Just 7-10 Days After Dispatch!",
      icon: "⏱️"
    }
  ];

  const categories = [
    "Sell Men T-Shirts",
    "Sell Men Trousers",
    "Sell Men Party Wears",
    "Sell Men Tuxido",
    "Sell Women Saaree",
    "Sell Women Salwars",
    "Sell Kids Party Wears",
    "Sell Kids Pajama",
    "Sell Men Sweatshirts",
    "Sell Men Shirts",
    "Sell Men Formals",
    "Sell Men Pants",
    "Sell Woman Suits",
    "Sell Women Uppers",
    "Sell Kids Nightwears",
    "Sell Kids Clothes"
  ];

  const footerLinks = {
    explore: ["Top Products", "Trending Products", "New Products", "Find Vendors", "Post Requirements", "View All"],
    seller: ["Become A Seller", "Add Products", "Manage Products", "My Profile", "Orders", "Payments", "Dashboard"],
    quickLinks: ["Help & Support", "About Ecocys", "FAQs", "Privacy Policy", "Refund Policy", "Terms Of Use"],
    user: ["My Cart", "My Wishlist", "My Account", "Help & Support"],
    social: ["Instagram", "Facebook", "YouTube", "Twitter"]
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 max-w-7xl font-sans">
      {/* Header Section */}
      <header className="w-full bg-white shadow-sm sticky top-0 z-50">
        <div className="flex flex-col md:flex-row items-center justify-between py-4 px-4 sm:px-6 gap-4 md:gap-6">
          <div className="order-1 md:order-1 flex-shrink-0">
            <img src={logo} alt="EcoCys Logo" className="h-10 md:h-12 w-auto" />
          </div>

          <div className="order-2 md:order-3 ml-auto md:ml-0">
            <button className="text-sm md:text-base font-semibold text-blue-600 hover:text-blue-700 transition-colors whitespace-nowrap">
              Login / Sign Up
            </button>
          </div>

          <div className="order-3 md:order-2 w-full md:flex-1 md:max-w-xl mt-0 md:mt-0">
            <div className="relative">
              <input
                type="text"
                placeholder="Search Products, Sellers & More..."
                className="w-full px-5 py-2.5 md:py-3 text-sm md:text-base text-gray-700 bg-gray-50 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <nav className="border-t border-gray-200 px-4 sm:px-6 py-3">
          <ul className="flex flex-wrap items-center justify-center md:justify-start gap-4 md:gap-6 text-sm md:text-base font-medium text-gray-800">
            {['Become A Seller', 'Post Your Requirements', 'Trending Products', 'Top Products'].map((item) => (
              <li key={item}>
                <a href="#" className="block px-2 py-1 rounded-md hover:text-blue-600 hover:bg-gray-50 transition-colors">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      {/* Main Content Section */}
      <main>
        <section className="grid md:grid-cols-2 gap-12 items-center mt-12">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-gray-900 leading-snug">
              Reach thousands of Buyers online with <span className="text-blue-600">0% commission</span> on sales.
            </h2>
            <p className="text-gray-600 text-xl">
              Start Your B2B Selling With EcoCys
            </p>

            <div className="mt-8 space-y-5 max-w-lg">
              <div className="flex items-center border border-gray-300 rounded-full px-6 py-3 bg-white shadow-sm">
                <input
                  type="text"
                  placeholder="Enter 10 Digit Mobile Number"
                  className="outline-none w-full text-base text-gray-700"
                  value={mobileNumber}
                  onChange={(e) => setMobileNumber(e.target.value)}
                  maxLength="10"
                />
                <button 
                  className="ml-4 bg-green-600 text-white text-base font-semibold px-5 py-2 rounded-full hover:bg-green-700 transition-all"
                  onClick={handleSendOtp}
                  disabled={mobileNumber.length !== 10}
                >
                  {otpSent ? "Resend OTP" : "Get OTP"}
                </button>
              </div>

              {otpSent && (
                <>
                  <div className="flex items-center border border-gray-300 rounded-full px-6 py-3 bg-white shadow-sm">
                    <input
                      type="text"
                      placeholder="Enter OTP Here"
                      className="outline-none w-full text-base text-gray-700"
                      value={otp}
                      onChange={(e) => setOtp(e.target.value)}
                    />
                    {otp.length === 6 && (
                      <span className="text-green-500 font-semibold text-2xl ml-3">✓</span>
                    )}
                  </div>

                  <div className="flex items-center border border-gray-300 rounded-full px-6 py-3 bg-white shadow-sm">
                    <input
                      type="email"
                      placeholder="Enter Mail ID"
                      className="outline-none w-full text-base text-gray-700"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    {email && (
                      <span className="text-green-500 font-semibold text-2xl ml-3">✓</span>
                    )}
                  </div>

                  <div className="flex items-center border border-gray-300 rounded-full px-6 py-3 bg-white shadow-sm">
                    <input
                      type="password"
                      placeholder="Set Password"
                      className="outline-none w-full text-base text-gray-700"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    {password.length >= 8 && (
                      <span className="text-green-500 font-semibold text-2xl ml-3">✓</span>
                    )}
                  </div>

                  <button 
                    className="bg-blue-600 text-white text-lg font-semibold py-3.5 rounded-full w-full hover:bg-blue-700 transition-all disabled:bg-blue-400"
                    disabled={!otp || !email || password.length < 8}
                  >
                    Get Started
                  </button>
                </>
              )}
            </div>
          </div>

          <div className="flex justify-center">
            <img
              src={flipkartsellerlogo}
              alt="Seller"
              className="rounded-lg w-full max-w-lg object-contain"
            />
          </div>
        </section>

        {/* Benefits Section */}
        <section className="mt-16 bg-gray-50 p-10 rounded-xl">
          <div className="flex justify-center space-x-6 mb-10">
            <button 
              onClick={() => setActiveTab("manufacturer")}
              className={`px-8 py-3 rounded-lg font-semibold text-lg transition-colors ${
                activeTab === "manufacturer" 
                  ? "bg-green-600 text-white hover:bg-green-700" 
                  : "bg-gray-200 hover:bg-gray-300"
              }`}
            >
              Manufacturer
            </button>
            <button 
              onClick={() => setActiveTab("retailer")}
              className={`px-8 py-3 rounded-lg font-semibold text-lg transition-colors ${
                activeTab === "retailer" 
                  ? "bg-green-600 text-white hover:bg-green-700" 
                  : "bg-gray-200 hover:bg-gray-300"
              }`}
            >
              Retailers
            </button>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md text-center space-y-4 hover:shadow-lg transition-shadow"
              >
                <div className="text-4xl">{benefit.icon}</div>
                <h3 className="font-bold text-xl text-gray-800">{benefit.title}</h3>
                <p className="text-gray-600 text-lg">{benefit.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Popular Categories Section */}
        <section className="my-16">
          <h1 className="text-4xl font-bold text-center mb-12 text-gray-900">
            Popular Categories To Sell Online
          </h1>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 mb-12">
            {categories.map((category, index) => (
              <div key={index} className="text-center group">
                <a href="#" className="text-gray-700 hover:text-blue-600 text-lg font-medium transition-colors group-hover:underline">
                  {category}
                </a>
              </div>
            ))}
          </div>

          <div className="mt-12 space-y-8">
            <div className="bg-gray-100 p-6 rounded-xl shadow-md">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">EcoCys Supplier</h2>
              <p className="text-green-600 font-semibold text-lg mb-3">Support Available 24X7</p>
              <p className="text-gray-700 text-base">
                <strong className="font-semibold">EcoCys Supplier Support</strong> available round the clock to assist with your queries,
                questions & onboarding process. Start selling with <strong>EcoCys</strong> today!
              </p>
            </div>

            <div className="my-10 px-4 flex justify-center">
              <img
                src={sellerImage}
                alt="Become a Seller"
                className="rounded-3xl w-full max-w-4xl object-cover shadow-xl"
              />
            </div>
          </div>
        </section>

        {/* FAQs Section */}
        <section className="mt-16">
          <h2 className="text-3xl font-bold mb-6 text-gray-900 text-center">FAQs</h2>
          <div className="grid gap-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-gray-100 border border-gray-300 p-4 rounded-md shadow-sm hover:shadow-md transition-shadow"
              >
                <h3
                  className="font-medium text-gray-800 text-base hover:text-blue-600 transition-colors cursor-pointer flex justify-between items-center"
                  onClick={() => toggleFaq(index)}
                >
                  {faq.question}
                  <span className="text-lg ml-4">{openFaqIndex === index ? "−" : "+"}</span>
                </h3>
                {openFaqIndex === index && (
                  <p className="text-gray-600 text-sm mt-3 pl-2 border-l-2 border-blue-500">
                    {faq.answer}
                  </p>
                )}
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-6 mt-10 border-t">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 text-sm text-gray-700">
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <h4 className="mb-2 font-bold capitalize">{section}</h4>
              {links.map((link) => (
                <a 
                  key={link} 
                  href="#" 
                  className="block py-1 hover:text-blue-600 transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>
          ))}
        </div>
        <p className="text-center text-xs text-gray-500 mt-6">
          Copyright 2025 By EcoCys. All Rights Reserved
        </p>
      </footer>
    </div>
  );
};

export default BecomeSellerStatic;