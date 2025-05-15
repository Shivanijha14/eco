// src/App.jsx
import React from 'react';
import HomePage from './assets/App/HomePage'; // Corrected based on your structure
import FindProducts from './assets/App/FindProducts';
import ProductView from './assets/App/ProductView';
import MyAccount from './assets/App/MyAccount';
import MyOrders from './assets/App/MyOrders';
import CartAndWishlist from './assets/App/CartAndWishlist';

const App = () => {
  return (
    <div>
      {/* <HomePage /> */}
      {/* <FindProducts/> */}
      <ProductView/>
      {/* <MyAccount/> */}
      {/* <MyOrders/> */}
      {/* <CartAndWishlist/> */}
    </div>
  );
};

export default App;
