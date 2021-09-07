import { React, createContext, useState, useContext } from "react";

export const CartContext = createContext();

export const useCardContext = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  console.log(cart);

  const isInCart = (id) => cart.some((item) => item.id === id);

  const addToCart = (item, quantity) => {
    if (isInCart(item.id)) {
      const newCart = cart.map((cartElement) => {
        if (cartElement.id === item.id) {
          return { ...cartElement, quantity: cartElement.quantity + quantity };
        } else return cartElement;
      });
      setCart(newCart);
    } else {
      setCart((prev) => [...prev, { ...item, quantity }]);
    }
  };

  const removeItem = (itemId) => {
    setCart(cart.filter((item) => item.id !== itemId));
  };

  const totalItems = cart.reduce((acc, item) => {
    return acc + item.quantity;
  }, 0);

  const totalPrice = cart.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);

  const clear = () => setCart([]);

  return (
    <CartContext.Provider
      value={{
        cart,
        isInCart,
        addToCart,
        removeItem,
        totalItems,
        totalPrice,
        clear,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
