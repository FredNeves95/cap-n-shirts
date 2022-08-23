import { createSelector } from 'reselect'

const selectCartReducer = (state) => state.cart


export const selectIsOpenCart = createSelector([selectCartReducer],
    (cart) =>
        cart.isOpen)


export const selectCartItems = createSelector([selectCartReducer],
    (cart) =>
        cart.cartItems)
