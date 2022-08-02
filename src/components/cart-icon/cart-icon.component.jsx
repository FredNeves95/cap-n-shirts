import { useContext } from "react";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { ToggleCartContext } from "../../context/toggle-cart.context";

import "./cart-icon.styles.scss";

const CartIcon = () => {
  const { isOpen, setIsOpen } = useContext(ToggleCartContext);
  return (
    <div className="cart-icon-container" onClick={() => setIsOpen(!isOpen)}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  );
};

export default CartIcon;
