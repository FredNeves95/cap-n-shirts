import { createContext, useReducer } from "react";
import { createAction } from "../utils/reducer/reducer.utils";

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

export const CART_ACTION_TYPES = {
  SET_CART_ITEMS: "SET_CART_ITEMS",
  OPEN_CART: "OPEN_CART",
};

const cartReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case CART_ACTION_TYPES.SET_CART_ITEMS:
      return { ...state, ...payload };
    case CART_ACTION_TYPES.OPEN_CART:
      return {
        ...state,
        isOpen: !state.isOpen,
      };
    default:
      throw new Error(`Unhandled type ${type} in cartReducer`);
  }
};

export const INITIAL_STATE = {
  isOpen: false,
  cartItems: [],
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, INITIAL_STATE);
  const { isOpen, cartItems } = state;

  const updateCartItemsReducer = (newCartItem) => {
    dispatch(
      createAction(CART_ACTION_TYPES.SET_CART_ITEMS, { cartItems: newCartItem })
    );
  };

  const setIsOpen = () => {
    dispatch(createAction(CART_ACTION_TYPES.OPEN_CART));
  };

  const addItemsToCart = (productToAdd) => {
    const newCartItems = addCartItem(state.cartItems, productToAdd);
    updateCartItemsReducer(newCartItems);
  };

  const removeItemsFromCart = (productToRemove) => {
    const newCartItems = removeCartItem(state.cartItems, productToRemove);
    updateCartItemsReducer(newCartItems);
  };

  const decreaseItemsFromCart = (productToDecrease) => {
    const newCartItems = decreaseCartItem(state.cartItems, productToDecrease);
    updateCartItemsReducer(newCartItems);
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
