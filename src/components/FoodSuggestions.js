import React, { useState } from 'react';
import { foodItems } from './FoodSuggestions_Part1';
import { moreFoodItems } from './FoodSuggestions_Part2';
import Toast from './Toast';

const FoodSuggestions = ({ addToCart }) => {
  const [message, setMessage] = useState('');

  const handleAddToCart = (item) => {
    addToCart(item);
    setMessage(`${item.name} added to cart!`);
  };

  const handleCloseToast = () => {
    setMessage('');
  };

  return (
    <section className="food-suggestions" id="food-suggestions" style={{ padding: '40px 20px', textAlign: 'center' }}>
      <h1 className="heading" style={{ marginBottom: '30px' }}>
        Food <span>Suggestions</span>
      </h1>
      <Toast message={message} onClose={handleCloseToast} />
      <div style={{ display: 'flex', overflowX: 'auto', gap: '20px', paddingBottom: '10px', scrollBehavior: 'smooth' }}>
        {foodItems.map((item) => (
          <div
            key={item.id}
            style={{
              flex: '0 0 auto',
              width: '220px',
              backgroundColor: 'white',
              borderRadius: '10px',
              boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
              padding: '15px',
              textAlign: 'center',
            }}
          >
            <span style={{ color: '#d32f2f', fontWeight: 'bold' }}>₹{item.price.toFixed(2)}</span>
            <img src={item.image} alt={item.name} style={{ width: '100%', borderRadius: '10px', margin: '10px 0' }} />
            <h3 style={{ textTransform: 'capitalize' }}>{item.name}</h3>
            <button
              onClick={() => handleAddToCart(item)}
              style={{
                backgroundColor: '#d32f2f',
                color: 'white',
                border: 'none',
                padding: '10px 20px',
                borderRadius: '5px',
                cursor: 'pointer',
                marginTop: '10px',
              }}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
      <div style={{ marginTop: '40px', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '30px' }}>
        {moreFoodItems.map((item) => (
          <div
            key={item.id}
            style={{
              width: '220px',
              backgroundColor: 'white',
              borderRadius: '10px',
              boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
              padding: '15px',
              textAlign: 'center',
            }}
          >
            <span style={{ color: '#d32f2f', fontWeight: 'bold' }}>₹{item.price.toFixed(2)}</span>
            <img src={item.image} alt={item.name} style={{ width: '100%', borderRadius: '10px', margin: '10px 0' }} />
            <h3 style={{ textTransform: 'capitalize' }}>{item.name}</h3>
            <button
              onClick={() => handleAddToCart(item)}
              style={{
                backgroundColor: '#d32f2f',
                color: 'white',
                border: 'none',
                padding: '10px 20px',
                borderRadius: '5px',
                cursor: 'pointer',
                marginTop: '10px',
              }}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FoodSuggestions;
