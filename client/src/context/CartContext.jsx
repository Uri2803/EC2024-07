import React, { createContext, useState, useContext, useEffect } from 'react';
import { addToCart, getCart, removeFromCart, updateCartQuantity as updateCartAPI } from '../service/api'; // Giả sử bạn đã có các API này

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [shouldFetch, setShouldFetch] = useState(true);

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const data = await getCart();
        if (Array.isArray(data.cartItems)) {
          setCart(data.cartItems);
        } else {
          console.error('Cart data is not an array:', data);
          setCart([]);
        }
      } catch (error) {
        console.error('Error fetching cart data:', error);
        setCart([]);
      }
    };

    if (shouldFetch) {
      fetchCart();
      setShouldFetch(false);
    }
  }, [][shouldFetch]);

  const getCartCount = () => {
    
    return cart.reduce((total, item) => total + (item.CartItemQuantity || 0), 0);
  };

  const addToCartHandler = async (productID, quantity) => {
    try {
      const response = await addToCart(productID, quantity);
      if (response && Array.isArray(response.cartItems)) {
        setCart(response.cartItems);
      } else {
        console.error('Unexpected response format:', response);
      }
      setShouldFetch(true);
    } catch (error) {
      console.error('Error adding to cart:', error);
    }
  };

  const updateCartQuantityHandler = async (productID, quantity) => {
    try {
      const response = await updateCartAPI(productID, quantity);
      if (response && Array.isArray(response.cartItems)) {
        setCart(response.cartItems);
      } else {
        console.error('Unexpected response format:', response);
      }
      setShouldFetch(true);
    } catch (error) {
      console.error('Error updating cart quantity:', error);
    }
  };

  const removeFromCartHandler = async (productID) => {
    try {
      const response = await removeFromCart(productID);
      if (response && Array.isArray(response.cartItems)) {
        setCart(response.cartItems);
      } else {
        console.error('Unexpected response format:', response);
      }
      setShouldFetch(true);
    } catch (error) {
      console.error('Error removing from cart:', error);
    }
  };

  return (
    <CartContext.Provider 
      value={{ 
        cart, 
        addToCart: addToCartHandler, 
        updateCartQuantity: updateCartQuantityHandler, 
        removeFromCart: removeFromCartHandler, 
        cartCount: getCartCount() 
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
