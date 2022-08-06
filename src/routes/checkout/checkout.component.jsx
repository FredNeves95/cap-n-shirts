import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CheckoutCard from "../../components/checkout-card/checkout-card.component";
import { CartContext } from "../../context/cart.context";
import { UserContext } from "../../context/user.context";

import {
  CheckoutContainer,
  CheckoutHeader,
  HeaderBlock,
  Total,
} from "./checkout.styles";

const Checkout = () => {
  const { cartItems } = useContext(CartContext);
  const { currentUser } = useContext(UserContext);

  const navigate = useNavigate();

  useEffect(() => {
    if (!currentUser) {
      navigate("/auth");
    }
  }, [currentUser, navigate]);

  const totalPrice = cartItems.reduce(
    (acc, curr) => acc + curr.price * curr.quantity,
    0
  );

  return (
    <CheckoutContainer>
      <CheckoutHeader>
        <HeaderBlock>
          <span>Product</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Description</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Quantity</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Price</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Remove</span>
        </HeaderBlock>
      </CheckoutHeader>
      {cartItems.map((product) => (
        <CheckoutCard key={product.id} product={product} />
      ))}

      <Total>TOTAL: ${totalPrice}</Total>
    </CheckoutContainer>
  );
};

export default Checkout;
