import React, { useState } from "react";
import logo from "../logo.png";

const Signup = () => {
  const dummyGstin = "07AXVPV8453E";

  const [step, setStep] = useState(1);
  const [gstin, setGstin] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleGstinVerify = () => {
    if (gstin.trim() === dummyGstin) {
      setEmail("user8453@ecocys.com");
      setPassword("EcoCys@123");
      setStep(2);
    } else {
      alert("Invalid GSTIN. Please try again.");
    }
  };

  const handleSignup = () => {
    if (!mobile || !email || !password) {
      alert("Please complete all fields.");
      return;
    }
    setStep(3);
    alert("Signup Successful!");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4 py-8 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-6">
        
        {/* Logo */}
        <div className="flex justify-center">
          <img src={logo} alt="EcoCys Logo" className="h-16 w-auto" />
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-gray-200 h-2 rounded-full">
          <div
            className={`h-full ${
              step === 1 ? "w-1/3" : step === 2 ? "w-2/3" : "w-full"
            } bg-cyan-500 rounded-full transition-all duration-500`}
          ></div>
        </div>

        {/* Header */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-700">Enter Your GSTIN</h2>
          <p className="text-base text-gray-500 mt-2">Only Active GST IN</p>
        </div>

        {/* Step 1: GSTIN Input */}
        {step === 1 && (
          <div className="flex flex-col gap-4">
                      <input
              type="text"
              placeholder="07AXVPV8453E"
              value={gstin}
              onChange={(e) => setGstin(e.target.value)}
              className="w-full px-4 py-3 rounded-full bg-gray-100 text-gray-700 border border-gray-300 focus:outline-none focus:ring-0 focus:border-gray-300 text-center text-lg"
            />

            <button
              onClick={handleGstinVerify}
              className="w-full bg-cyan-600 text-white px-4 py-3 rounded-full hover:bg-cyan-700 transition font-medium text-lg"
            >
              Continue
            </button>
          </div>
        )}

        {/* Step 2: Additional Fields */}
        {step === 2 && (
          <div className="space-y-4">
            <input
              type="tel"
              maxLength="10"
              placeholder="Enter 10 Digit Mobile Number"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              className="w-full px-4 py-3 rounded-full border border-gray-300"
            />
            <input
              type="email"
              placeholder="Enter Mail ID (Auto Fetch)"
              value={email}
              readOnly
              className="w-full px-4 py-3 rounded-full border border-gray-300 bg-gray-100 text-gray-700"
            />
            <input
              type="password"
              placeholder="Set Password (Auto Fetch)"
              value={password}
              readOnly
              className="w-full px-4 py-3 rounded-full border border-gray-300 bg-gray-100 text-gray-700"
            />
            <button
              onClick={handleSignup}
              className="w-full bg-cyan-600 text-white font-bold py-3 rounded-full hover:bg-cyan-700 transition"
            >
              Get Started
            </button>
          </div>
        )}

        {/* Step 3: Signup Complete */}
        {step === 3 && (
          <div className="text-center text-green-600 font-semibold text-xl mt-4">
            ✅ Signup Completed Successfully!
          </div>
        )}

        {/* Login Prompt */}
        <p className="text-center text-base text-gray-500 mt-6">
          Have an account?{" "}
          <span className="text-cyan-600 font-semibold cursor-pointer hover:underline">
            Login
          </span>
        </p>
      </div>
    </div>
  );
};

export default Signup;
