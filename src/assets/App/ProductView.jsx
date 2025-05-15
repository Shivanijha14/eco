import React, { useState } from 'react';
import productImg1 from './baby1.png';
import productImg2 from './baby2.png';
import productImg3 from './baby3.png';
import productImg4 from './baby4.png';
import logoImg from './shop vector icon.png';
import cartImg from './cart.png';

const ProductView = () => {
  const [selectedImage, setSelectedImage] = useState(productImg1);
  const thumbnailImages = [productImg1, productImg2, productImg3, productImg4];

  const styles = {
    container: {
      fontFamily: 'sans-serif',
      backgroundColor: '#f8fafc',
      padding: '12px',
      width: '100vw',
      height: '100vh',
      overflowX: 'hidden',
      boxSizing: 'border-box'
    },
    header: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingBottom: '12px',
      width: '100%'
    },
    productSection: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      width: '100%'
    },
    imageContainer: {
      display: 'flex',
      width: '100%',
      justifyContent: 'center',
      marginBottom: '16px'
    },
    thumbnails: {
      display: 'flex',
      flexDirection: 'column',
      gap: '8px',
      marginRight: '12px'
    },
    thumbnailImg: (isSelected) => ({
      width: '50px',
      height: '60px',
      borderRadius: '8px',
      border: isSelected ? '2px solid #facc15' : '2px solid #e5e7eb',
      objectFit: 'cover',
      cursor: 'pointer'
    }),
    mainImage: {
      width: '70vw',
      maxWidth: '300px',
      height: '80vw',
      maxHeight: '350px',
      objectFit: 'cover',
      borderRadius: '12px'
    },
    details: {
      textAlign: 'center',
      width: '100%',
      padding: '0 8px'
    },
    productName: {
      fontSize: '18px',
      fontWeight: 'bold',
      color: '#334155',
      marginBottom: '8px'
    },
    price: {
      fontSize: '16px',
      fontWeight: '600',
      color: '#000',
      marginBottom: '12px'
    },
    viewDetails: {
      margin: '16px auto',
      padding: '12px',
      backgroundColor: '#fff7ed',
      borderRadius: '12px',
      fontSize: '14px',
      color: '#000',
      border: '1px solid #fcd34d',
      width: '90%',
      maxWidth: '350px'
    },
    buttonGroup: {
      display: 'flex',
      justifyContent: 'center',
      gap: '12px',
      width: '100%',
      marginTop: '16px'
    },
    button: {
      padding: '12px 16px',
      borderRadius: '25px',
      fontWeight: 'bold',
      fontSize: '14px',
      border: 'none',
      width: '48%',
      maxWidth: '160px'
    },
    cartButton: {
      backgroundColor: '#0ea5e9',
      color: '#fff'
    },
    wishlistButton: {
      backgroundColor: '#9ca3af',
      color: '#fff'
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <img src={logoImg} alt="Logo" style={{ height: '36px' }} />
        <img src={cartImg} alt="Cart" style={{ height: '28px' }} />
      </div>

      <div style={styles.productSection}>
        <div style={styles.imageContainer}>
          <div style={styles.thumbnails}>
            {thumbnailImages.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Thumbnail ${index + 1}`}
                style={styles.thumbnailImg(selectedImage === img)}
                onClick={() => setSelectedImage(img)}
              />
            ))}
          </div>
          <img src={selectedImage} alt="Main Product" style={styles.mainImage} />
        </div>

        <div style={styles.details}>
          <p style={styles.productName}>JX Adorable Blue Kitty Print Dungarees</p>
          <p style={styles.price}>INR 500/-</p>

          <div style={styles.viewDetails}>View Complete Product Details</div>

          <div style={styles.buttonGroup}>
            <button style={{ ...styles.button, ...styles.cartButton }}>Add To Cart</button>
            <button style={{ ...styles.button, ...styles.wishlistButton }}>Add To Wishlist</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductView;