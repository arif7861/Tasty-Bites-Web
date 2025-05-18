import React, { useState } from 'react';
import Toast from './Toast';
import { useCart } from '../context/CartContext';

const Order = () => {
  const [couponCode, setCouponCode] = useState('');
  const [couponApplied, setCouponApplied] = useState(false);
  const [tip, setTip] = useState(0);
  const [orderConfirmed, setOrderConfirmed] = useState(false);
  const [message, setMessage] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [addressLine, setAddressLine] = useState('');
  const [state, setState] = useState('');
  const [pincode, setPincode] = useState('');
  const [category, setCategory] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');
  const [deliveryPartner, setDeliveryPartner] = useState('');
  const { clearCart, cartItems } = useCart();

  const handleApplyCoupon = (e) => {
    e.preventDefault();
    if (couponCode.trim() !== '') {
      setCouponApplied(true);
      alert('Coupon applied successfully!');
    } else {
      alert('Please enter a valid coupon code.');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setOrderConfirmed(true);
    setMessage('Order placed successfully!');
    setCouponCode('');
    setCouponApplied(false);
    setTip(0);

    // Save order details to localStorage as recent order, including all details
    const orderDetails = {
      date: new Date().toISOString(),
      couponCode,
      tip,
      name,
      email,
      phone,
      addressLine,
      state,
      pincode,
      category,
      paymentMethod,
      deliveryPartner,
      items: cartItems.map(item => ({
        id: item.id,
        name: item.name,
        price: item.price,
        quantity: item.quantity,
      })),
    };
    const existingOrders = JSON.parse(localStorage.getItem('recentOrders')) || [];
    existingOrders.unshift(orderDetails);
    localStorage.setItem('recentOrders', JSON.stringify(existingOrders.slice(0, 5))); // Keep last 5 orders

    // Clear cart after order placement
    clearCart();

    // No logout after order placement as per user request
  };

  const handleCloseToast = () => {
    setOrderConfirmed(false);
    setMessage('');
  };

  return (
    <section
      className="order"
      id="order"
      style={{
        maxWidth: '600px',
        margin: '40px auto',
        padding: '30px',
        backgroundColor: '#fff',
        borderRadius: '12px',
        boxShadow: '0 8px 20px rgba(0,0,0,0.15)',
        position: 'relative',
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      }}
    >
      <Toast message={orderConfirmed ? message : ''} onClose={handleCloseToast} />
      <h1
        className="heading"
        style={{
          textAlign: 'center',
          color: '#d32f2f',
          marginBottom: '40px',
          fontWeight: '700',
          fontSize: '2.5rem',
          letterSpacing: '2px',
        }}
      >
        <span>Order</span> Now
      </h1>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <div style={{ display: 'flex', gap: '20px' }}>
          <div style={{ flex: 1 }}>
            <label htmlFor="name" style={{ display: 'block', marginBottom: '8px', fontWeight: '600' }}>
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={{
                width: '100%',
                padding: '12px',
                borderRadius: '8px',
                border: '1px solid #ccc',
                fontSize: '1rem',
                transition: 'border-color 0.3s',
              }}
              required
              onFocus={(e) => (e.target.style.borderColor = '#d32f2f')}
              onBlur={(e) => (e.target.style.borderColor = '#ccc')}
            />
          </div>
          <div style={{ flex: 1 }}>
            <label htmlFor="email" style={{ display: 'block', marginBottom: '8px', fontWeight: '600' }}>
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{
                width: '100%',
                padding: '12px',
                borderRadius: '8px',
                border: '1px solid #ccc',
                fontSize: '1rem',
                transition: 'border-color 0.3s',
              }}
              required
              onFocus={(e) => (e.target.style.borderColor = '#d32f2f')}
              onBlur={(e) => (e.target.style.borderColor = '#ccc')}
            />
          </div>
        </div>
        <div style={{ display: 'flex', gap: '20px' }}>
          <div style={{ flex: 1 }}>
            <label htmlFor="phone" style={{ display: 'block', marginBottom: '8px', fontWeight: '600' }}>
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              placeholder="Your Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              style={{
                width: '100%',
                padding: '12px',
                borderRadius: '8px',
                border: '1px solid #ccc',
                fontSize: '1rem',
                transition: 'border-color 0.3s',
              }}
              required
              onFocus={(e) => (e.target.style.borderColor = '#d32f2f')}
              onBlur={(e) => (e.target.style.borderColor = '#ccc')}
            />
          </div>
          <div style={{ flex: 1 }}>
            <label htmlFor="addressLine" style={{ display: 'block', marginBottom: '8px', fontWeight: '600' }}>
              Address Line
            </label>
            <input
              type="text"
              id="addressLine"
              placeholder="Address Line"
              value={addressLine}
              onChange={(e) => setAddressLine(e.target.value)}
              style={{
                width: '100%',
                padding: '12px',
                borderRadius: '8px',
                border: '1px solid #ccc',
                fontSize: '1rem',
                transition: 'border-color 0.3s',
              }}
              required
              onFocus={(e) => (e.target.style.borderColor = '#d32f2f')}
              onBlur={(e) => (e.target.style.borderColor = '#ccc')}
            />
          </div>
        </div>
        <div style={{ display: 'flex', gap: '20px' }}>
          <div style={{ flex: 1 }}>
            <label htmlFor="state" style={{ display: 'block', marginBottom: '8px', fontWeight: '600' }}>
              State
            </label>
            <input
              type="text"
              id="state"
              placeholder="State"
              value={state}
              onChange={(e) => setState(e.target.value)}
              style={{
                width: '100%',
                padding: '12px',
                borderRadius: '8px',
                border: '1px solid #ccc',
                fontSize: '1rem',
                transition: 'border-color 0.3s',
              }}
              required
              onFocus={(e) => (e.target.style.borderColor = '#d32f2f')}
              onBlur={(e) => (e.target.style.borderColor = '#ccc')}
            />
          </div>
          <div style={{ flex: 1 }}>
            <label htmlFor="pincode" style={{ display: 'block', marginBottom: '8px', fontWeight: '600' }}>
              Pincode
            </label>
            <input
              type="text"
              id="pincode"
              placeholder="Pincode"
              value={pincode}
              onChange={(e) => setPincode(e.target.value)}
              style={{
                width: '100%',
                padding: '12px',
                borderRadius: '8px',
                border: '1px solid #ccc',
                fontSize: '1rem',
                transition: 'border-color 0.3s',
              }}
              required
              onFocus={(e) => (e.target.style.borderColor = '#d32f2f')}
              onBlur={(e) => (e.target.style.borderColor = '#ccc')}
            />
          </div>
        </div>
        <div>
          <label htmlFor="category" style={{ display: 'block', marginBottom: '8px', fontWeight: '600' }}>
            Category
          </label>
          <select
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            style={{
              width: '100%',
              padding: '12px',
              borderRadius: '8px',
              border: '1px solid #ccc',
              fontSize: '1rem',
              transition: 'border-color 0.3s',
            }}
            required
            onFocus={(e) => (e.target.style.borderColor = '#d32f2f')}
            onBlur={(e) => (e.target.style.borderColor = '#ccc')}
          >
            <option value="">Select Category</option>
            <option value="home">Home</option>
            <option value="work">Work</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div>
          <label style={{ display: 'block', marginTop: '20px', marginBottom: '8px', fontWeight: '600' }}>Payment Method</label>
          <select
            value={paymentMethod}
            onChange={(e) => setPaymentMethod(e.target.value)}
            style={{
              width: '100%',
              padding: '12px',
              borderRadius: '8px',
              border: '1px solid #ccc',
              fontSize: '1rem',
              transition: 'border-color 0.3s',
            }}
            required
            onFocus={(e) => (e.target.style.borderColor = '#d32f2f')}
            onBlur={(e) => (e.target.style.borderColor = '#ccc')}
          >
            <option value="">Select Payment Method</option>
            <option value="credit_card">Credit Card</option>
            <option value="debit_card">Debit Card</option>
            <option value="paypal">PayPal</option>
            <option value="cash_on_delivery">Cash on Delivery</option>
          </select>
        </div>
        <div style={{ marginTop: '20px' }}>
          <label htmlFor="deliveryPartner" style={{ display: 'block', marginBottom: '8px', fontWeight: '600' }}>
            Delivery Partner
          </label>
          <select
            id="deliveryPartner"
            value={deliveryPartner}
            onChange={(e) => setDeliveryPartner(e.target.value)}
            style={{
              width: '100%',
              padding: '12px',
              borderRadius: '8px',
              border: '1px solid #ccc',
              fontSize: '1rem',
              transition: 'border-color 0.3s',
            }}
            required
            onFocus={(e) => (e.target.style.borderColor = '#d32f2f')}
            onBlur={(e) => (e.target.style.borderColor = '#ccc')}
          >
            <option value="">Select Delivery Partner</option>
            <option value="partner1">Partner 1</option>
            <option value="partner2">Partner 2</option>
            <option value="partner3">Partner 3</option>
          </select>
        </div>
        <div style={{ marginTop: '20px' }}>
          <label htmlFor="tip" style={{ display: 'block', marginBottom: '8px', fontWeight: '600' }}>
            Tip
          </label>
          <select
            id="tip"
            value={tip}
            onChange={(e) => setTip(e.target.value)}
            style={{
              width: '100%',
              padding: '12px',
              borderRadius: '8px',
              border: '1px solid #ccc',
              fontSize: '1rem',
              transition: 'border-color 0.3s',
            }}
          >
            <option value={0}>No Tip</option>
            <option value={5}>₹5</option>
            <option value={10}>₹10</option>
            <option value={15}>₹15</option>
            <option value={20}>₹20</option>
          </select>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: '20px' }}>
          <input
            type="text"
            id="coupon"
            value={couponCode}
            onChange={(e) => setCouponCode(e.target.value)}
            placeholder="Enter coupon code"
            style={{
              flex: 1,
              padding: '12px',
              borderRadius: '8px',
              border: '1px solid #ccc',
              fontSize: '1rem',
              transition: 'border-color 0.3s',
            }}
            disabled={couponApplied}
          />
          <button
            onClick={handleApplyCoupon}
            disabled={couponApplied}
            style={{
              padding: '12px 20px',
              backgroundColor: couponApplied ? '#ccc' : '#d32f2f',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              fontWeight: '600',
              cursor: couponApplied ? 'default' : 'pointer',
              transition: 'background-color 0.3s',
            }}
            type="button"
          >
            {couponApplied ? 'Applied' : 'Apply'}
          </button>
        </div>
        <button
          type="submit"
          style={{
            marginTop: '30px',
            width: '100%',
            padding: '15px',
            backgroundColor: '#d32f2f',
            color: 'white',
            border: 'none',
            borderRadius: '12px',
            fontSize: '1.2rem',
            fontWeight: '700',
            cursor: 'pointer',
            transition: 'background-color 0.3s',
          }}
          onMouseEnter={(e) => (e.target.style.backgroundColor = '#b71c1c')}
          onMouseLeave={(e) => (e.target.style.backgroundColor = '#d32f2f')}
        >
          Place Order
        </button>
      </form>
    </section>
  );
};

export default Order;
