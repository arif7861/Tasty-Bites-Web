import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
const foodImage = process.env.PUBLIC_URL + '/images/home-img.png';

const Login = ({ onLogin, authError }) => {
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
    if (!email || !password) {
      setError('Please enter both email and password.');
      return;
    }
    setError('');
    try {
      if (onLogin) {
        await onLogin(email, password);
      }
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <section className="login-container" style={{ backgroundImage: `url(${foodImage})` }}>
      <div className="login-form-container">
        <h2 className="login-title">Login</h2>
        {error && <div className="login-error">{error}</div>}
        <form onSubmit={handleSubmit} className="login-form">
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
          <button type="submit" className="login-button">
            Login
          </button>
        </form>
        <p className="switch-auth">
          Don't have an account? <Link to="/register" className="auth-link">Register here</Link>
        </p>
      </div>
    </section>
  );
};

export default Login;
