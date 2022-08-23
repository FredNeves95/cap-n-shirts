import { useDispatch, useSelector } from "react-redux";
import { setIsOpen } from "../../store/cart/cart.action";
import { selectCartItems } from "../../store/cart/cart.selector";

import { CartIconContainer, ShoppingIcon, ItemCount } from "./cart-icon.styles";

const CartIcon = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const productsQuantity = cartItems.reduce(
    (acc, curr) => acc + curr.quantity,
    0
  );

  return (
    <CartIconContainer onClick={() => dispatch(setIsOpen())}>
      <ShoppingIcon />
      <ItemCount>{productsQuantity}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
