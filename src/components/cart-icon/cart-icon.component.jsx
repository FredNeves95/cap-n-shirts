import { useContext } from "react";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { CartContext } from "../../context/cart.context";

import "./cart-icon.styles.scss";

const CartIcon = () => {
  const { isOpen, setIsOpen } = useContext(CartContext);
  const { cartItems } = useContext(CartContext);

  const productsQuantity = cartItems.reduce(
    (acc, curr) => acc + curr.quantity,
    0
  );

  return (
    <div className="cart-icon-container" onClick={() => setIsOpen(!isOpen)}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{productsQuantity}</span>
    </div>
  );
};

export default CartIcon;
