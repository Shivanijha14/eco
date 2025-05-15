import React from 'react';
import { FaStore, FaShoppingCart } from 'react-icons/fa';

// ✅ Correct image imports
import logoImg from './shop vector icon.png'; // Replace with your actual image path
import CartImg from './cart.png';
import menImg from './men.png';
import womenImg from './women.png';
import boyImg from './boy.png';
import girlImg from './girl.png';
import shirtImg from './men shirts.png' // uploaded image

const sections = [
  {
    label: "Browse in Men Section",
    count: 857,
    img: menImg,
    borderColor: "#fbbf24",
    textColor: "#f59e0b"
  },
  {
    label: "Browse in Women Section",
    count: 292,
    img: womenImg,
    borderColor: "#34d399",
    textColor: "#10b981"
  },
  {
    label: "Browse in Boy Section",
    count: 3125,
    img: boyImg,
    borderColor: "#5eead4",
    textColor: "#14b8a6"
  },
  {
    label: "Browse in Girl Section",
    count: 2598,
    img: girlImg,
    borderColor: "#fca5a5",
    textColor: "#ef4444"
  }
];

const HomePage = () => {
  // Mobile-responsive styles
  const styles = {
    container: {
      padding: '12px',
      fontFamily: 'sans-serif',
      backgroundColor: '#f8fafc',
      maxWidth: '100vw',
      overflowX: 'hidden'
    },
    header: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '0 12px 8px 12px'
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: '12px',
      marginTop: '12px'
    },
    card: {
      backgroundColor: 'white',
      borderRadius: '16px',
      borderWidth: '2px',
      borderStyle: 'solid',
      padding: '8px',
      textAlign: 'center',
      boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
      minHeight: '180px'
    },
    image: {
      width: '100%',
      height: '80px',
      objectFit: 'contain'
    },
    countText: {
      fontSize: '14px',
      fontWeight: 'bold',
      marginBottom: '4px'
    },
    labelText: {
      fontSize: '12px',
      fontWeight: '600'
    },
    bottomPlaceholder: {
      height: '120px',
      backgroundColor: '#f1f5f9',
      borderRadius: '16px',
      marginTop: '16px'
    },
    newProductsSection: {
      marginTop: '24px'
    },
    newProductsTitle: {
      fontSize: '20px',
      fontWeight: 'bold',
      color: '#334155',
      marginBottom: '12px'
    },
    productCardGrid: {
      display: 'flex',
      gap: '12px',
      overflowX: 'auto',
      paddingBottom: '8px'
    },
    productCard: {
      backgroundColor: '#fff',
      borderRadius: '16px',
      padding: '12px',
      minWidth: '70vw',
      boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
      position: 'relative'
    },
    productImage: {
      width: '100%',
      height: '120px',
      borderRadius: '12px',
      objectFit: 'contain'
    },
    badge: {
      position: 'absolute',
      top: '10px',
      left: '10px',
      backgroundColor: '#f3f4f6',
      padding: '4px 12px',
      borderRadius: '999px',
      fontSize: '12px',
      fontWeight: '600'
    },
    productName: {
      fontSize: '14px',
      fontWeight: '600',
      marginTop: '8px'
    },
    seller: {
      fontSize: '12px',
      color: '#6b7280'
    },
    price: {
      fontWeight: 'bold',
      fontSize: '16px',
      color: '#000',
      marginTop: '4px'
    },
    bannerSection: {
      marginTop: '24px'
    },
    bannerCard: {
      backgroundColor: '#d1d5db',
      height: '120px',
      borderRadius: '10px',
      marginBottom: '16px'
    },
    footer: {
      textAlign: 'center',
      padding: '16px 0',
      marginTop: '24px',
      fontSize: '14px',
      color: '#6b7280'
    },
    clickableHeaderItem: {
      cursor: 'pointer'
    }
  };

  const handleLogoClick = () => {
    console.log("Logo clicked - navigate to home");
    // Add navigation logic here
  };

  const handleCartClick = () => {
    console.log("Cart clicked - navigate to cart");
    // Add navigation logic here
  };

  return (
    <div style={styles.container}>
      {/* Header */}
      <div style={styles.header}>
        <div 
          style={{ ...styles.clickableHeaderItem }} 
          onClick={handleLogoClick}
        >
          <img src={logoImg} alt="EcoCys Logo Left" style={{ height: '36px' }} />
        </div>

        <div 
          style={{ display: 'flex', alignItems: 'center', gap: '12px', ...styles.clickableHeaderItem }} 
          onClick={handleCartClick}
        > 
          <img src={CartImg} alt="EcoCys Logo Right" style={{ height: '36px' }} />
        </div>
      </div>

      {/* Product Grid */}
      <div style={styles.grid}>
        {sections.map((section, index) => (
          <div key={index} style={{ ...styles.card, borderColor: section.borderColor }}>
            <img src={section.img} alt={section.label} style={styles.image} />
            <p style={{ ...styles.countText, color: section.textColor }}>{section.count} Products</p>
            <p style={{ ...styles.labelText, color: section.textColor }}>{section.label}</p>
          </div>
        ))}
      </div>

      {/* Bottom Placeholder */}
      <div style={styles.bottomPlaceholder}></div>

      {/* New Products Section */}
      <div style={styles.newProductsSection}>
        <h2 style={styles.newProductsTitle}>New Products</h2>
        <div style={styles.productCardGrid}>
          {[1, 2, 3].map((item) => (
            <div key={item} style={styles.productCard}>
              <div style={styles.badge}>Recently Added</div>
              <img src={shirtImg} alt="Shirt" style={styles.productImage} />
              <p style={styles.productName}>Stylish Glamorous Men Shirts</p>
              <p style={styles.seller}>Sold By Wholesaler</p>
              <p style={styles.price}>500/- Per Pack</p>
            </div>
          ))}
        </div>
      </div>

      {/* Grey Banner Section */}
      <div style={styles.bannerSection}>
        <div style={styles.bannerCard}></div>
      </div>

      {/* Trending Products Section */}
      <div style={styles.newProductsSection}>
        <h2 style={styles.newProductsTitle}>Trending Products</h2>
        <div style={styles.productCardGrid}>
          {[1, 2, 3].map((item) => (
            <div key={item} style={styles.productCard}>
              <div style={styles.badge}>Recently Added</div>
              <img src={shirtImg} alt="Shirt" style={styles.productImage} />
              <p style={styles.productName}>Stylish Glamorous Men Shirts</p>
              <p style={styles.seller}>Sold By Wholesaler</p>
              <p style={styles.price}>500/- Per Pack</p>
            </div>
          ))}
        </div>
      </div>

      <div style={styles.bannerSection}>
        <div style={styles.bannerCard}></div>
      </div>

      <div style={styles.newProductsSection}>
        <h2 style={styles.newProductsTitle}>Top Products</h2>
        <div style={styles.productCardGrid}>
          {[1, 2, 3].map((item) => (
            <div key={item} style={styles.productCard}>
              <div style={styles.badge}>Recently Added</div>
              <img src={shirtImg} alt="Shirt" style={styles.productImage} />
              <p style={styles.productName}>Stylish Glamorous Men Shirts</p>
              <p style={styles.seller}>Sold By Wholesaler</p>
              <p style={styles.price}>500/- Per Pack</p>
            </div>
          ))}
        </div>
      </div>

      <div style={styles.bannerSection}>
        <div style={styles.bannerCard}></div>
      </div>

      {/* Footer */}
      <footer style={styles.footer}>
        Copyright 2025 By EcoCys. All Rights Reserved.
      </footer>
    </div>
  );
};

export default HomePage;
