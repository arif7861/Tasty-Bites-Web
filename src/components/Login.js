import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
const foodImage = process.env.PUBLIC_URL + '/images/home-img.png';

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError('Please enter both email and password.');
      return;
    }
    setError('');
    // Placeholder for actual login logic
    if (onLogin) {
      onLogin(email, password);
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
