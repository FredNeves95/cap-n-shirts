import { CART_ACTION_TYPES } from "./cart.types";

export const CART_INITIAL_STATE = {
    isOpen: false,
    cartItems: [],
};

export const cartReducer = (state = CART_INITIAL_STATE, action = {}) => {
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
            return state
    }
};