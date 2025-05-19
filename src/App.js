import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import { auth } from './firebase';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import Home from './components/Home';
import Speciality from './components/Speciality';
import Popular from './components/Popular';
import FoodSuggestions from './components/FoodSuggestions';
import UpdatedPopularFood from './components/UpdatedPopularFood';
import Gallery from './components/Gallery';
import Review from './components/Review';
import Order from './components/Order';
import SpecialityDetail from './components/SpecialityDetail';
import NavigationBar from './components/NavigationBar';
import Billing from './components/Billing';
import Cart from './components/Cart';
import Profile from './components/Profile';
import HelpSupport from './components/HelpSupport';
import LoginComponent from './components/Login';
import RegisterComponent from './components/Register';
import RecentOrders from './components/RecentOrders';

const FooterWrapper = () => {
  return null;
};

import { CartProvider, useCart } from './context/CartContext';

const AppWrapper = () => {
  return (
    <Router>
      <CartProvider>
        <App />
      </CartProvider>
    </Router>
  );
};

const App = () => {
  const [user, setUser] = useState(null);
  const [authLoading, setAuthLoading] = useState(true);
  const [authError, setAuthError] = useState(null);
  const navigate = useNavigate();

  const { cartItems, addToCart } = useCart();

  const cartCount = cartItems.length;

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser);
      setAuthLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const handleLogin = async (email, password) => {
    try {
      setAuthError(null);
      await signInWithEmailAndPassword(auth, email, password);
      const currentUser = auth.currentUser;
      setUser(currentUser);
      navigate('/');
    } catch (error) {
      console.error('Login error:', error);
      setAuthError(error.message);
    }
  };

  const handleRegister = async ({ name, email, password }) => {
    try {
      setAuthError(null);
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(userCredential.user, { displayName: name });
      // Reload current user from auth
      await auth.currentUser.reload();
      const currentUser = auth.currentUser;
      setUser(currentUser);
      // Save profile details to localStorage for Profile component
      localStorage.setItem(`profileDetails_${email}`, JSON.stringify({ name, email, phone: '' }));
      navigate('/');
    } catch (error) {
      console.error('Registration error:', error);
      setAuthError(error.message);
    }
  };

  const handleLogout = () => {
    auth.signOut().then(() => {
      setUser(null);
      navigate('/');
    });
  };

  if (authLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <NavigationBar cartCount={cartCount} user={user} onLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<Home addToCart={addToCart} />} />
        <Route path="/speciality" element={<Speciality />} />
        <Route path="/speciality/:id" element={<SpecialityDetail />} />
        <Route path="/popular" element={<UpdatedPopularFood addToCart={addToCart} />} />
        <Route path="/food-suggestions" element={<FoodSuggestions addToCart={addToCart} />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/review" element={<Review />} />
        <Route path="/order" element={<Order />} />
        <Route path="/billing" element={<Billing />} />
        <Route path="/cart" element={<Cart user={user} />} />
        <Route path="/account" element={<Profile user={user} onLogout={handleLogout} />} />
        <Route path="/help-support" element={<HelpSupport />} />
        <Route path="/login" element={<LoginComponent onLogin={handleLogin} authError={authError} />} />
        <Route path="/register" element={<RegisterComponent onRegister={handleRegister} authError={authError} />} />
        <Route path="/my-orders" element={<RecentOrders user={user} />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <FooterWrapper />
    </>
  );
};

export default AppWrapper;
