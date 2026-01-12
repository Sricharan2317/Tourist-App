import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

function Navbar({ userName, onPostClick }) {
  const navigate = useNavigate();
  const location = useLocation();
  const isDetailPage = location.pathname.startsWith('/place/');

  const [isLogoHovered, setIsLogoHovered] = useState(false);
  const [isPostHovered, setIsPostHovered] = useState(false);

  const handleLogoClick = () => {
    window.location.reload();
  };

  return (
    <nav style={styles.nav}>
      <div style={styles.left}>
        {userName && (
          <img
            src="https://static.vecteezy.com/system/resources/previews/041/041/570/non_2x/travel-app-logo-icon-brand-identity-sign-symbol-vector.jpg" 
            alt="Logo"
            style={{
              ...styles.logo,
              transform: isLogoHovered ? 'scale(1.1)' : 'scale(1)',
              boxShadow: isLogoHovered ? '0 4px 10px rgba(0, 0, 0, 0.3)' : 'none',
              cursor: 'pointer',
            }}
            onClick={handleLogoClick}
            onMouseEnter={() => setIsLogoHovered(true)}
            onMouseLeave={() => setIsLogoHovered(false)}
          />
        )}
        {userName && <span style={styles.userName}>Welcome, {userName}</span>}
      </div>

      {!isDetailPage && userName && (
        <div style={styles.right}>
          <button
            onClick={onPostClick}
            onMouseEnter={() => setIsPostHovered(true)}
            onMouseLeave={() => setIsPostHovered(false)}
            style={{
              ...styles.postButton,
              transform: isPostHovered ? 'scale(1.05)' : 'scale(1)',
              backgroundColor: isPostHovered ? '#d66d5b' : '#2E8B57',
              boxShadow: isPostHovered
                ? '0 6px 10px rgba(0, 0, 0, 0.25)'
                : '0 4px 6px rgba(92, 66, 66, 0.1)',
            }}
          >
            Post
          </button>
        </div>
      )}
    </nav>
  );
}

const styles = {
  nav: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    backgroundColor: 'black',
    color: '#fff',
    padding: '15px 10px',
    zIndex: 1000,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  left: {
    display: 'flex',
    alignItems: 'center',
    gap: '15px',
    fontSize: '18px',
  },
  logo: {
    height: '40px',
    width: '40px',
    borderRadius: '8px',
    transition: 'all 0.3s ease',
  },
  right: {
    marginRight: '20px',
  },
  postButton: {
    color: '#FFFFFF',
    padding: '8px 14px',
    borderRadius: '12px',
    fontWeight: 'bold',
    cursor: 'pointer',
    border: 'none',
    transition: 'all 0.3s ease',
  },
  userName: {
    color: 'white',
    fontWeight: '700',
    fontSize: '20px',
  },
};

export default Navbar;
