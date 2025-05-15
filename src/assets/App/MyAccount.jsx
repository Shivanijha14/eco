import React from 'react';
import storeIcon from './shop vector icon.png';
import cartImg from './cart.png';
import logoImg from './shop vector icon.png';
import { Lock } from 'lucide-react';

const MyAccount = () => {
  const accountDetails = [
    { label: 'Bhagwati Vastralay', locked: false },
    { label: '07AXVPV8453E', locked: true },
    { label: '3rd Floor, A64, Sector 63, Noida', locked: true },
    { label: '201301', locked: false },
    { label: 'HSN Code', locked: true },
    { label: 'Orders@ecocys.com', locked: false },
    { label: '9999999999', locked: true },
    { label: '***************', locked: false },
  ];

  const handlePencilClick = () => {
    console.log("Edit profile clicked");
  };

  const handleUpdateClick = () => {
    console.log("Update details clicked");
  };

  const handleCartClick = () => {
    console.log("Cart clicked");
  };

  const handleLogoClick = () => {
    console.log("Logo clicked");
  };

  const styles = {
    container: {
      fontFamily: 'sans-serif',
      backgroundColor: '#f8fafc',
      padding: '16px',
      width: '100vw',
      minHeight: '100vh',
      boxSizing: 'border-box',
      overflowX: 'hidden'
    },
    header: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '24px',
      width: '100%'
    },
    footer: {
      marginTop: '40px',
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
      marginBottom: '24px'
    },
    profileImageSection: {
      display: 'flex',
      justifyContent: 'center',
      position: 'relative',
      marginBottom: '24px',
      width: '100%'
    },
    profileImg: {
      width: '80px',
      height: '80px',
      borderRadius: '50%',
      border: '3px solid white',
      boxShadow: '0 2px 6px rgba(0,0,0,0.1)'
    },
    pencilIcon: {
      position: 'absolute',
      bottom: '4px',
      right: 'calc(50% - 40px)',
      backgroundColor: '#fef3c7',
      padding: '4px',
      borderRadius: '50%',
      cursor: 'pointer'
    },
    inputGroup: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: '12px',
      justifyContent: 'center',
      width: '100%'
    },
    input: {
      padding: '12px 16px',
      width: '90%',
      maxWidth: '400px',
      borderRadius: '8px',
      border: 'none',
      backgroundColor: '#f1f5f9',
      fontSize: '14px',
      color: '#111827'
    },
    lockIcon: {
      marginLeft: '8px',
      color: '#6b7280'
    },
    button: {
      backgroundColor: '#0ea5e9',
      color: 'white',
      padding: '14px 24px',
      borderRadius: '25px',
      fontSize: '16px',
      fontWeight: 'bold',
      border: 'none',
      cursor: 'pointer',
      marginTop: '20px',
      display: 'block',
      marginLeft: 'auto',
      marginRight: 'auto',
      width: '90%',
      maxWidth: '300px'
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

      {/* Title */}
      <div style={styles.title}>My Account</div>
      <div style={styles.subText}>Found 000 Items</div>

      {/* Profile image */}
      <div style={styles.profileImageSection}>
        <img src={storeIcon} alt="Store Icon" style={styles.profileImg} />
        <div 
          style={styles.pencilIcon} 
          onClick={handlePencilClick}
        >
          ✏️
        </div>
      </div>

      {/* Details */}
      {accountDetails.map((item, index) => (
        <div style={styles.inputGroup} key={index}>
          <input type="text" value={item.label} style={styles.input} readOnly />
          {item.locked && <Lock size={16} style={styles.lockIcon} />}
        </div>
      ))}

      {/* Button */}
      <button 
        style={styles.button} 
        onClick={handleUpdateClick}
      >
        Update Details
      </button>

      {/* Footer */}
      <div style={styles.footer}>
        © {new Date().getFullYear()} YourCompany. All rights reserved.
      </div>
    </div>
  );
};

export default MyAccount;