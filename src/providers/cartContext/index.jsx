import { createContext, useContext, useState } from "react";

const CartContext = createContext({});

const useCart = () => {
  const context = useContext(CartContext);

  return context;
};

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addItem = (item) => setCartItems([...cartItems, item]);
  const subItem = (item) =>
    setCartItems(
      cartItems.filter((e, i) => {
        return i !== item.id;
      })
    );

  return (
    <CartContext.Provider value={{ cartItems, addItem, subItem }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartProvider, useCart };
