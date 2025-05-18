import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Cart = ({ user }) => {
  const navigate = useNavigate();
  const { cartItems, updateQuantity, removeFromCart } = useCart();

  const handleQuantityChange = (id, quantity) => {
    if (quantity < 1) return;
    updateQuantity(id, Number(quantity));
  };

  const getTotal = () => {
    return cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  };

  const handleProceed = () => {
    navigate('/order');
  };

  return (
    <section style={{ maxWidth: '800px', margin: '40px auto', padding: '0 20px', fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" }}>
      <h2 style={{ textAlign: 'center', color: '#d32f2f', marginBottom: '20px', fontWeight: '700', fontSize: '2rem' }}>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p style={{ textAlign: 'center', fontSize: '1.2rem' }}>Your cart is empty.</p>
      ) : (
        <table style={{ width: '100%', borderCollapse: 'collapse', backgroundColor: '#fff', boxShadow: '0 8px 20px rgba(0,0,0,0.1)', borderRadius: '12px' }}>
          <thead style={{ backgroundColor: '#f8f8f8' }}>
            <tr>
              <th style={{ padding: '16px', textAlign: 'left', color: '#d32f2f', fontWeight: '700' }}>Item</th>
              <th style={{ padding: '16px', textAlign: 'center', color: '#d32f2f', fontWeight: '700' }}>Quantity</th>
              <th style={{ padding: '16px', textAlign: 'right', color: '#d32f2f', fontWeight: '700' }}>Price</th>
              <th style={{ padding: '16px', textAlign: 'right', color: '#d32f2f', fontWeight: '700' }}>Total</th>
              <th style={{ padding: '16px', textAlign: 'center', color: '#d32f2f', fontWeight: '700' }}>Added By</th>
              <th style={{ padding: '16px', textAlign: 'center', color: '#d32f2f', fontWeight: '700' }}>Added At</th>
              <th style={{ padding: '16px', textAlign: 'center', color: '#d32f2f', fontWeight: '700' }}>Remove</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map(item => (
              <tr key={item.id} style={{ borderBottom: '1px solid #eee', transition: 'background-color 0.3s' }} onMouseEnter={e => e.currentTarget.style.backgroundColor = '#f9f9f9'} onMouseLeave={e => e.currentTarget.style.backgroundColor = 'transparent'}>
                <td style={{ padding: '16px' }}>{item.name}</td>
                <td style={{ padding: '16px', textAlign: 'center' }}>
                  <input
                    type="number"
                    value={item.quantity}
                    min="1"
                    onChange={(e) => handleQuantityChange(item.id, e.target.value)}
                    style={{ width: '60px', padding: '8px', borderRadius: '6px', border: '1px solid #ccc', fontSize: '1rem' }}
                  />
                </td>
                <td style={{ padding: '16px', textAlign: 'right' }}>₹{item.price.toFixed(2)}</td>
                <td style={{ padding: '16px', textAlign: 'right' }}>₹{(item.price * item.quantity).toFixed(2)}</td>
                <td style={{ padding: '16px', textAlign: 'center' }}>{item.addedBy || 'Unknown'}</td>
                <td style={{ padding: '16px', textAlign: 'center' }}>{item.addedAt ? new Date(item.addedAt).toLocaleString() : 'Unknown'}</td>
                <td style={{ padding: '16px', textAlign: 'center' }}>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    style={{
                      color: '#d32f2f',
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      fontWeight: 'bold',
                      fontSize: '1.1rem',
                      transition: 'color 0.3s',
                    }}
                    onMouseEnter={e => e.currentTarget.style.color = '#b71c1c'}
                    onMouseLeave={e => e.currentTarget.style.color = '#d32f2f'}
                    aria-label={`Remove ${item.name} from cart`}
                  >
                    &times;
                  </button>
                </td>
              </tr>
            ))}
            <tr>
              <td colSpan="3" style={{ padding: '16px', textAlign: 'right', fontWeight: '700', fontSize: '1.2rem' }}>Total:</td>
              <td style={{ padding: '16px', textAlign: 'right', fontWeight: '700', fontSize: '1.2rem' }}>₹{getTotal().toFixed(2)}</td>
              <td colSpan="3"></td>
            </tr>
          </tbody>
        </table>
      )}
      <div style={{ textAlign: 'center', marginTop: '40px' }}>
        <button
          onClick={handleProceed}
          style={{
            backgroundColor: '#d32f2f',
            color: 'white',
            padding: '14px 36px',
            border: 'none',
            borderRadius: '12px',
            fontSize: '1.2rem',
            fontWeight: '700',
            cursor: 'pointer',
            transition: 'background-color 0.3s',
          }}
          disabled={cartItems.length === 0}
          onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#b71c1c')}
          onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#d32f2f')}
        >
          Proceed to Order
        </button>
      </div>
    </section>
  );
};

export default Cart;
