import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Register.css';
const foodImage = process.env.PUBLIC_URL + '/images/home-img.png';

const Register = ({ onRegister, authError }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    if (authError) {
      setError(authError);
    }
  }, [authError]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !email || !password) {
      setError('Please fill in all fields.');
      return;
    }
    setError('');
    try {
      if (onRegister) {
        await onRegister({ name, email, password });
      }
    } catch (err) {
      setError(err.message || 'Registration failed. Please try again.');
    }
  };

  return (
    <section className="register-container" style={{ backgroundImage: `url(${foodImage})` }}>
      <div className="register-form-container">
        <h2 className="register-title">Register</h2>
        {error && <div className="register-error">{error}</div>}
        <form onSubmit={handleSubmit} className="register-form">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="input-field"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="input-field"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="input-field"
            />
          </div>
          <button type="submit" className="register-button">
            Register
          </button>
        </form>
        <p className="switch-auth">
          Already have an account? <Link to="/login" className="auth-link">Login here</Link>
        </p>
      </div>
    </section>
  );
};

export default Register;
