import React, { useState } from 'react';
import productImg from './men shirts.png';
import storeIcon from './shop vector icon.png';
import cartImg from './cart.png';
import logoImg from './shop vector icon.png';

const MyOrders = () => {
  const [activeTab, setActiveTab] = useState('Active');
  const tabs = ['Active', 'Past', 'Cancelled'];

  const products = Array(10).fill({
    name: 'Stylish Glamorous Men Shirts',
    seller: 'Vishwakar',
    price: '₹949/- Per Pack',
    tag: 'Recently Added',
    image: productImg,
  });

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    console.log(`Tab clicked: ${tab}`);
  };

  const handleLogoClick = () => {
    console.log("Logo clicked");
  };

  const handleCartClick = () => {
    console.log("Cart clicked");
  };

  const handleSearch = (e) => {
    console.log("Search:", e.target.value);
  };

  const handleProductClick = (index) => {
    console.log(`Product ${index} clicked`);
  };

  const styles = {
    container: {
      fontFamily: 'sans-serif',
      padding: '12px',
      width: '100vw',
      minHeight: '100vh',
      boxSizing: 'border-box',
      overflowX: 'hidden'
    },
    header: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '20px',
      width: '100%'
    },
    footer: {
      marginTop: '32px',
      textAlign: 'center',
      fontSize: '12px',
      color: '#9ca3af',
      borderTop: '1px solid #e5e7eb',
      paddingTop: '12px',
      width: '100%'
    },
    title: {
      textAlign: 'center',
      fontSize: '20px',
      fontWeight: 'bold',
      color: '#374151',
      marginBottom: '8px'
    },
    subText: {
      textAlign: 'center',
      fontSize: '14px',
      color: '#9ca3af',
      marginBottom: '16px'
    },
    tabContainer: {
      display: 'flex',
      justifyContent: 'space-around',
      borderBottom: '1px solid #d1d5db',
      marginBottom: '12px',
      width: '100%'
    },
    tab: (selected) => ({
      padding: '12px 0',
      cursor: 'pointer',
      fontWeight: 'bold',
      borderBottom: selected ? '2px solid #0ea5e9' : 'none',
      color: selected ? '#0ea5e9' : '#6b7280',
      flex: 1,
      textAlign: 'center'
    }),
    searchBox: {
      display: 'block',
      margin: '0 auto 16px auto',
      width: '90%',
      maxWidth: '400px',
      padding: '12px 16px',
      borderRadius: '8px',
      border: '1px solid #e5e7eb',
      backgroundColor: '#f1f5f9',
      fontSize: '14px'
    },
    noItems: {
      textAlign: 'center',
      color: '#6b7280',
      backgroundColor: '#f9fafb',
      padding: '32px 20px',
      borderRadius: '12px',
      marginBottom: '24px',
      fontSize: '14px'
    },
    sectionTitle: {
      fontSize: '16px',
      fontWeight: 'bold',
      margin: '20px 0 12px 0',
      color: '#374151'
    },
    productGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: '12px',
      width: '100%'
    },
    productCard: {
      backgroundColor: '#ffffff',
      borderRadius: '12px',
      padding: '8px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
      fontSize: '12px',
      cursor: 'pointer'
    },
    productImage: {
      width: '100%',
      height: '120px',
      borderRadius: '8px',
      marginBottom: '4px',
      objectFit: 'cover'
    },
    productTag: {
      backgroundColor: '#fcd34d',
      color: '#1f2937',
      fontSize: '10px',
      fontWeight: 'bold',
      padding: '2px 6px',
      borderRadius: '4px',
      position: 'absolute',
      top: '8px',
      left: '8px'
    },
    cardTop: {
      position: 'relative'
    },
    clickable: {
      cursor: 'pointer'
    }
  };

  return (
    <div style={styles.container}>
      {/* Header */}
      <div style={styles.header}>
        <img 
          src={logoImg} 
          alt="Logo" 
          style={{ ...styles.clickable, height: '36px' }} 
          onClick={handleLogoClick}
        />
        <img 
          src={cartImg} 
          alt="Cart" 
          style={{ ...styles.clickable, height: '28px' }} 
          onClick={handleCartClick}
        />
      </div>

      {/* Title and Tabs */}
      <div style={styles.title}>My Orders</div>
      <div style={styles.subText}>Found 000 Items</div>

      <div style={styles.tabContainer}>
        {tabs.map((tab) => (
          <div
            key={tab}
            style={styles.tab(activeTab === tab)}
            onClick={() => handleTabClick(tab)}
          >
            {tab}
          </div>
        ))}
      </div>

      {/* Search */}
      <input
        type="text"
        placeholder="Search By Product Name / SKU ID"
        style={styles.searchBox}
        onChange={handleSearch}
      />

      {/* No Items Placeholder */}
      <div style={styles.noItems}>No Items Found</div>

      {/* New Products */}
      <div style={styles.sectionTitle}>New Products</div>
      <div style={styles.productGrid}>
        {products.map((product, idx) => (
          <div 
            key={idx} 
            style={styles.productCard}
            onClick={() => handleProductClick(idx)}
          >
            <div style={styles.cardTop}>
              <img src={product.image} alt="Product" style={styles.productImage} />
              <div style={styles.productTag}>{product.tag}</div>
            </div>
            <div><strong>{product.name}</strong></div>
            <div>Sold by: {product.seller}</div>
            <div>{product.price}</div>
          </div>
        ))}
      </div>

      {/* Trending Products */}
      <div style={styles.sectionTitle}>Trending Products</div>
      <div style={styles.productGrid}>
        {products.map((product, idx) => (
          <div 
            key={idx} 
            style={styles.productCard}
            onClick={() => handleProductClick(idx + products.length)}
          >
            <div style={styles.cardTop}>
              <img src={product.image} alt="Product" style={styles.productImage} />
              <div style={styles.productTag}>{product.tag}</div>
            </div>
            <div><strong>{product.name}</strong></div>
            <div>Sold by: {product.seller}</div>
            <div>{product.price}</div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div style={styles.footer}>
        © {new Date().getFullYear()} YourCompany. All rights reserved.
      </div>
    </div>
  );
};

export default MyOrders;