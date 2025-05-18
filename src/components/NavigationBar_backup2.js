import React from 'react';
import { Link } from 'react-router-dom';

const NavigationBar = ({ cartCount }) => {
  return (
    <nav style={{ backgroundColor: '#d32f2f', padding: '20px 30px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: 'white' }}>
      <div style={{ fontWeight: 'bold', fontSize: '2rem', cursor: 'pointer' }}>
        <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Tasty Bites</Link>
      </div>
      <ul style={{ listStyle: 'none', display: 'flex', gap: '30px', margin: 0, padding: 0 }}>
        <li>
          <Link to="/" style={{ color: 'white', textDecoration: 'none', fontSize: '1.2rem' }}>Home</Link>
        </li>
        <li>
          <Link to="/popular" style={{ color: 'white', textDecoration: 'none', fontSize: '1.2rem' }}>Popular Food</Link>
        </li>
        <li>
          <Link to="/profile" style={{ color: 'white', textDecoration: 'none', fontSize: '1.2rem' }}>Account</Link>
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
      </ul>
    </nav>
  );
};

export default NavigationBar;
