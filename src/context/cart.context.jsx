import { createContext, useState } from "react";

export const CartContext = createContext({
  isOpen: false,
  setIsOpen: () => {},
  cartItems: [],
  addItemsToCart: () => {},
  removeItemsFromCart: () => {},
  decreaseItemsFromCart: () => {},
});

const addCartItem = (cartItems, productToAdd) => {
  const cartItem = cartItems.find((item) => item.id === productToAdd.id);

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

const removeCartItem = (cartItems, productToRemove) => {
  const newCartArray = cartItems.filter(
    (item) => item.id !== productToRemove.id
  );

  return newCartArray;
};

const decreaseCartItem = (cartItems, productToDecrease) => {
  const cartItem = cartItems.find((item) => item.id === productToDecrease.id);
  let newCartArray;
  if (cartItem.quantity === 1) {
    newCartArray = cartItems.filter((item) => item.id !== productToDecrease.id);
    return newCartArray;
  }

  newCartArray = cartItems.map((item) => {
    if (item.id === cartItem.id) {
      return {
        ...item,
        quantity: item.quantity - 1,
      };
    }
    return item;
  });
  return newCartArray;
};

export const CartProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const addItemsToCart = (productToAdd) => {
    const newCartArray = addCartItem(cartItems, productToAdd);
    setCartItems(newCartArray);
  };

  const removeItemsFromCart = (productToRemove) => {
    const newCartArray = removeCartItem(cartItems, productToRemove);
    setCartItems(newCartArray);
  };

  const decreaseItemsFromCart = (productToDecrease) => {
    const newCartArray = decreaseCartItem(cartItems, productToDecrease);
    setCartItems(newCartArray);
  };

  const value = {
    isOpen,
    setIsOpen,
    cartItems,
    addItemsToCart,
    removeItemsFromCart,
    decreaseItemsFromCart,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
