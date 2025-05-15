import React, { useState } from "react";
import logo from "../logo.png";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const dummyUser = {
    email: "test@ecocys.com",
    password: "test1234",
  };

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setErrorMsg("Please enter both email and password.");
      setSuccessMsg("");
      return;
    }

    if (email === dummyUser.email && password === dummyUser.password) {
      setErrorMsg("");
      setSuccessMsg("Login successful! Redirecting...");
      console.log("User logged in:", { email, password });

      setTimeout(() => {
        alert("Welcome to EcoCys!");
        setSuccessMsg("");
      }, 1500);
    } else {
      setErrorMsg("Invalid email or password.");
      setSuccessMsg("");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4 py-8 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-6">
        {/* Logo */}
        <div className="flex justify-center">
          <img src={logo} alt="EcoCys Logo" className="h-16 w-auto" />
        </div>

        {/* Progress bar (visual aid, optional) */}
        <div className="w-full bg-gray-200 h-2 rounded-full">
          <div className="h-full w-full bg-cyan-500 rounded-full transition-all duration-300"></div>
        </div>

        {/* Heading */}
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-700">Welcome Back</h2>
          <p className="text-sm text-gray-500 mt-1">Login to your account</p>
        </div>

        {/* Form */}
        <form onSubmit={handleLogin} className="space-y-4">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            required
          />

          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            required
          />

          {errorMsg && <p className="text-red-500 text-sm">{errorMsg}</p>}
          {successMsg && <p className="text-cyan-600 text-sm font-medium">{successMsg}</p>}

          <button
            type="submit"
            className="w-full bg-cyan-600 text-white font-bold py-3 rounded-lg hover:bg-cyan-700 transition"
          >
            Login
          </button>
        </form>

        {/* Signup link */}
        <p className="text-center text-sm text-gray-500">
          Don’t have an account?{" "}
          <span className="text-cyan-600 font-semibold cursor-pointer hover:underline">
            Contact support
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
