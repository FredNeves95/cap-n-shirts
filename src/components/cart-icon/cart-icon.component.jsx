import { useContext } from "react";
import { CartContext } from "../../context/cart.context";

import { CartIconContainer, ShoppingIcon, ItemCount } from "./cart-icon.styles";

const CartIcon = () => {
  const { setIsOpen } = useContext(CartContext);
  const { cartItems } = useContext(CartContext);

  const productsQuantity = cartItems.reduce(
    (acc, curr) => acc + curr.quantity,
    0
  );

  return (
    <CartIconContainer onClick={() => setIsOpen()}>
      <ShoppingIcon />
      <ItemCount>{productsQuantity}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
