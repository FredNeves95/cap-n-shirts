import { createContext, useState } from "react";

export const CartContext = createContext({
  isOpen: false,
  setIsOpen: () => {},
  cartItems: [],
  addItemsToCart: (product) => {},
});

const addCartItem = (cartItems, productToAdd) => {
  const cartItem = cartItems.find((item) => item.id === productToAdd.id);
  console.log("pop");
  let newCartArray;

  if (cartItem) {
    newCartArray = cartItems.map((item) => {
      if (item.id === cartItem.id) {
        return {
          ...item,
          quantity: item.quantity + 1,
        };
      }
      return item;
    });
    return newCartArray;
  }

  newCartArray = [...cartItems, { ...productToAdd, quantity: 1 }];
  return newCartArray;
};

export const CartProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const addItemsToCart = (productToAdd) => {
    const newCartArray = addCartItem(cartItems, productToAdd);
    setCartItems(newCartArray);
  };

  console.log(cartItems);

  const value = {
    isOpen,
    setIsOpen,
    cartItems,
    addItemsToCart,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
