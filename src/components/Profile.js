import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Profile.css';

const Profile = ({ user, onLogout }) => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (user) {
      setName(user.displayName || '');
      setEmail(user.email || '');
      setPhone('');
    } else {
      setName('');
      setEmail('');
      setPhone('');
    }
    // Load saved profile details from localStorage
    const savedProfile = localStorage.getItem('profileDetails');
    if (savedProfile) {
      const profile = JSON.parse(savedProfile);
      setName(profile.name || '');
      setEmail(profile.email || '');
      setPhone(profile.phone || '');
    }
  }, [user]);

  const handleMyOrders = () => {
    navigate('/my-orders');
  };

  if (!user) {
    navigate('/login');
    return null;
  }

  const handleSave = () => {
    const profile = { name, email, phone };
    localStorage.setItem('profileDetails', JSON.stringify(profile));
    setMessage('Profile details saved locally.');
    setTimeout(() => setMessage(''), 3000);
  };

  return (
    <section className="profile-container">
      <div className="profile-sidebar">
        <div className="profile-avatar" style={{ WebkitUserSelect: 'none', userSelect: 'none' }}>
          {user && user.displayName ? user.displayName.charAt(0).toUpperCase() : 'U'}
        </div>
        <h3 className="profile-username">{user ? user.displayName || email : 'User'}</h3>
        <p className="profile-email">{email}</p>
        <button className="profile-button">Profile Details</button>
        <p className="profile-link" onClick={handleMyOrders}>My Orders</p>
        <button className="logout-button" onClick={onLogout}>Logout</button>
      </div>
      <div className="profile-main">
        <h2>Profile Details</h2>
        <form>
          <div className="profile-form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
            />
          </div>
          <div className="profile-form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
            />
          </div>
          <div className="profile-form-group">
            <label htmlFor="phone">Phone</label>
            <input
              type="tel"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Enter your phone number"
            />
          </div>
          <button type="button" className="save-button" onClick={handleSave}>
            Save
          </button>
          {message && <p className="save-message">{message}</p>}
        </form>
      </div>
    </section>
  );
};

export default Profile;
