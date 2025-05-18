import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import Profile from './Profile';

const NavigationBar = ({ cartCount, user, onLogout }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [profileOpen, setProfileOpen] = useState(false);
  const profileRef = useRef(null);
  const buttonRef = useRef(null);

  const handleLogout = () => {
    if (onLogout) {
      onLogout();
    }
    setProfileOpen(false);
  };

  // Check if current path is login or register
  const isAuthPage = location.pathname === '/login' || location.pathname === '/register';

  const toggleProfile = () => {
    setProfileOpen((prev) => !prev);
  };

  // Close profile dropdown if click outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        profileRef.current &&
        !profileRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setProfileOpen(false);
      }
    };

    if (profileOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [profileOpen]);

  if (isAuthPage) {
    // Render minimal header with only Home button at top left corner
    return (
      <nav style={{ backgroundColor: '#d32f2f', padding: '20px 30px', display: 'flex', alignItems: 'center', color: 'white' }}>
        <div style={{ fontWeight: 'bold', fontSize: '2rem', cursor: 'pointer' }}>
          <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Home</Link>
        </div>
      </nav>
    );
  }

  return (
    <nav style={{ backgroundColor: '#d32f2f', padding: '20px 30px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: 'white', position: 'relative' }}>
      <div style={{ fontWeight: 'bold', fontSize: '2rem', cursor: 'pointer' }}>
        <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Tasty Bites</Link>
      </div>
      <ul style={{ listStyle: 'none', display: 'flex', gap: '30px', margin: 0, padding: 0, alignItems: 'center' }}>
        <li>
          <Link to="/" style={{ color: 'white', textDecoration: 'none', fontSize: '1.2rem' }}>Home</Link>
        </li>
        <li>
          <Link to="/popular" style={{ color: 'white', textDecoration: 'none', fontSize: '1.2rem' }}>Popular Food</Link>
        </li>
        <li>
          <Link to="/account" style={{ color: 'white', textDecoration: 'none', fontSize: '1.2rem' }}>
            Account
          </Link>
        </li>
        <li>
          <Link to="/help-support" style={{ color: 'white', textDecoration: 'none', fontSize: '1.2rem' }}>Support</Link>
        </li>
        <li style={{ position: 'relative' }}>
          <Link to="/cart" style={{ color: 'white', textDecoration: 'none', fontSize: '1.2rem' }}>
            Cart
          </Link>
          {cartCount > 0 && (
            <span style={{
              position: 'absolute',
              top: '-8px',
              right: '-12px',
              backgroundColor: 'yellow',
              color: 'black',
              borderRadius: '50%',
              padding: '2px 6px',
              fontSize: '0.75rem',
              fontWeight: 'bold'
            }}>
              {cartCount}
            </span>
          )}
        </li>
        {!user && (
          <>
            <li>
              <Link to="/login" style={{ color: 'white', textDecoration: 'none', fontSize: '1.2rem' }}>Login</Link>
            </li>
            <li>
              <Link to="/register" style={{ color: 'white', textDecoration: 'none', fontSize: '1.2rem' }}>Register</Link>
            </li>
          </>
        )}
        {user && (
          <>
            <li>
              <button onClick={onLogout} style={{ backgroundColor: 'transparent', border: 'none', color: 'white', cursor: 'pointer', fontSize: '1.2rem' }}>
                Logout
              </button>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default NavigationBar;
