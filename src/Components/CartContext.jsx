import React, { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export function useCart() {
  return useContext(CartContext);
}

export function CartProvider({ children }) {
  // Load cart from localStorage, if present
  const [cart, setCart] = useState(() => {
    const stored = localStorage.getItem("cart");
    return stored ? JSON.parse(stored) : [];
  });

  // Save cart to localStorage on change
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // Add item to cart (increment quantity if already exists)
  function addToCart(product, quantity = 1) {
    setCart(prevCart => {
      const index = prevCart.findIndex(item => item.id === product.id);
      if (index !== -1) {
        // Product exists, increment quantity
        return prevCart.map((item, i) =>
          i === index ? { ...item, quantity: item.quantity + quantity } : item
        );
      } else {
        // New product
        return [...prevCart, { ...product, quantity }];
      }
    });
  }

  // Remove a specific product from cart
  function removeFromCart(productId) {
    setCart(prevCart => prevCart.filter(item => item.id !== productId));
  }

  // Clear the entire cart
  function clearCart() {
    setCart([]);
  }

  // Get total cart item count
  function getCartCount() {
    return cart.reduce((sum, item) => sum + item.quantity, 0);
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        getCartCount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}