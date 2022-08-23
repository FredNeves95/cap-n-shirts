import { createAction } from "../../utils/reducer/reducer.utils";
import { CART_ACTION_TYPES } from "./cart.types";

export const setIsOpen = () => createAction(CART_ACTION_TYPES.OPEN_CART)

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

const updateCartItemsReducer = (newCartItem) => createAction(CART_ACTION_TYPES.SET_CART_ITEMS, { cartItems: newCartItem })

export const addItemsToCart = (cartItems, productToAdd) => {
    const newCartItems = addCartItem(cartItems, productToAdd);
    return updateCartItemsReducer(newCartItems);
};

export const removeItemsFromCart = (cartItems, productToRemove) => {
    const newCartItems = removeCartItem(cartItems, productToRemove);
    return updateCartItemsReducer(newCartItems);
};

export const decreaseItemsFromCart = (cartItems, productToDecrease) => {
    const newCartItems = decreaseCartItem(cartItems, productToDecrease);
    return updateCartItemsReducer(newCartItems);
};