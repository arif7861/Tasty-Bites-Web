import React from 'react';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#d32f2f', color: 'white', padding: '20px 30px', marginTop: '40px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', maxWidth: '900px', margin: '0 auto', flexWrap: 'wrap' }}>
        <div>
          <h3>Contact</h3>
          <p>Name: Tasty Bites</p>
          <p>Location: 123 Food Street, Flavor Town</p>
          <p>Email: contact@tastybites.com</p>
        </div>
        <div>
          <h3>Follow Us</h3>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" style={{ color: 'white', marginRight: '15px' }}>
            Facebook
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" style={{ color: 'white', marginRight: '15px' }}>
            Instagram
          </a>
          <a href="https://www.google.com/maps" target="_blank" rel="noopener noreferrer" style={{ color: 'white' }}>
            Location
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
