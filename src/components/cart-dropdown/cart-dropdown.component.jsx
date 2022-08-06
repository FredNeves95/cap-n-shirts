import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../context/cart.context";
import { UserContext } from "../../context/user.context";
import { getRoute } from "../../utils/functions";
import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";
import {
  CartDropdownContainer,
  CartItems,
  EmptyMessage,
} from "./cart-dropdown.styles.jsx";

const CHECKOUT_ROUTES = {
  signedIn: "/checkout",
  signedOff: "/auth",
};

const CartDropdown = () => {
  const { currentUser } = useContext(UserContext);
  const { cartItems, setIsOpen } = useContext(CartContext);
  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    const route = getRoute(currentUser, CHECKOUT_ROUTES);
    setIsOpen(false);
    navigate(route);
  };

  return (
    <CartDropdownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
        ) : (
          <EmptyMessage>Your cart is empty.</EmptyMessage>
        )}
      </CartItems>
      <Button onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>
    </CartDropdownContainer>
  );
};

export default CartDropdown;
