import React, { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const getCartCount = () => cart.reduce((total, item) => total + item.quantity, 0);

  const addToCart = (productId, quantity) => {
    setCart(prevCart => {
      const itemIndex = prevCart.findIndex(item => item.id === productId);
      if (itemIndex > -1) {
        const updatedCart = [...prevCart];
        updatedCart[itemIndex].quantity += quantity;
        return updatedCart;
      } else {
        return [...prevCart, { id: productId, quantity }];
      }
    });
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, cartCount: getCartCount() }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
