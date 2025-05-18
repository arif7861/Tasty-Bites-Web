import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import NavigationBar from './NavigationBar';


const Billing = () => {
  const [formData, setFormData] = useState({
    cardname: '',
    cardnumber: '',
    expdate: '',
    cvv: '',
    billingaddress: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    alert('Payment submitted successfully!');
  };

  return (
    <>
      <NavigationBar />
      <section className="billing" id="billing" style={{ padding: '40px 20px' }}>
        <h1 className="heading"><span>Billing</span> Information</h1>
        <div className="row" style={{ maxWidth: '600px', margin: '0 auto' }}>
          <form onSubmit={handleSubmit}>
            <div className="inputBox" style={{ marginBottom: '20px' }}>
              <input
                type="text"
                placeholder="Name on Card"
                name="cardname"
                value={formData.cardname}
                onChange={handleChange}
                required
                style={{ width: '100%', padding: '10px', marginBottom: '10px' }}
              />
              <input
                type="text"
                placeholder="Card Number"
                name="cardnumber"
                value={formData.cardnumber}
                onChange={handleChange}
                required
                style={{ width: '100%', padding: '10px' }}
              />
            </div>
            <div className="inputBox" style={{ marginBottom: '20px' }}>
              <input
                type="text"
                placeholder="Expiration Date (MM/YY)"
                name="expdate"
                value={formData.expdate}
                onChange={handleChange}
                required
                style={{ width: '100%', padding: '10px', marginBottom: '10px' }}
              />
              <input
                type="text"
                placeholder="CVV"
                name="cvv"
                value={formData.cvv}
                onChange={handleChange}
                required
                style={{ width: '100%', padding: '10px' }}
              />
            </div>
            <textarea
              placeholder="Billing Address"
              name="billingaddress"
              value={formData.billingaddress}
              onChange={handleChange}
              cols="30"
              rows="5"
              required
              style={{ width: '100%', padding: '10px', marginBottom: '20px' }}
            />
            <input type="submit" value="Submit Payment" className="btn0" style={{ cursor: 'pointer' }} />
          </form>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Billing;
