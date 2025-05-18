import React, { createContext, useState, useContext, useEffect } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    // Load cart items from localStorage if available
    const storedCart = localStorage.getItem('cartItems');
    return storedCart ? JSON.parse(storedCart) : [];
  });

  useEffect(() => {
    // Save cart items to localStorage whenever it changes
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (item, user) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(i => i.id === item.id);
      const addedAt = new Date().toISOString();
      if (existingItem) {
        return prevItems.map(i =>
          i.id === item.id
            ? { ...i, quantity: i.quantity + 1, addedBy: user?.displayName || 'Unknown', addedAt }
            : i
        );
      } else {
        return [...prevItems, { ...item, quantity: 1, addedBy: user?.displayName || 'Unknown', addedAt }];
      }
    });
  };

  const removeFromCart = (itemId) => {
    setCartItems(prevItems => prevItems.filter(i => i.id !== itemId));
  };

  const updateQuantity = (itemId, quantity) => {
    if (quantity < 1) return;
    setCartItems(prevItems =>
      prevItems.map(i =>
        i.id === itemId ? { ...i, quantity } : i
      )
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <CartContext.Provider value={{
      cartItems,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
      totalItems,
      totalPrice,
    }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
