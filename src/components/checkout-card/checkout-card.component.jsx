import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addItemsToCart,
  decreaseItemsFromCart,
  removeItemsFromCart,
} from "../../store/cart/cart.action";
import { selectCartItems } from "../../store/cart/cart.selector";

import {
  CheckoutItemContainer,
  ImageContainer,
  ItemInfo,
  ItemQuantity,
  Arrow,
  Value,
  RemoveButton,
} from "./checkout-card.styles";

const CheckoutCard = ({ product }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const { imageUrl, name, quantity, price } = product;
  const increaseProduct = () => {
    dispatch(addItemsToCart(cartItems, product));
  };

  const decreaseProduct = () => {
    dispatch(decreaseItemsFromCart(cartItems, product));
  };

  const removeProduct = () => {
    dispatch(removeItemsFromCart(cartItems, product));
  };

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={name} />
      </ImageContainer>
      <ItemInfo>{name}</ItemInfo>
      <ItemQuantity>
        <Arrow onClick={decreaseProduct}>&#10094;</Arrow>
        <Value>{quantity}</Value>
        <Arrow onClick={increaseProduct}>&#10095;</Arrow>
      </ItemQuantity>
      <ItemInfo>${price}</ItemInfo>
      <RemoveButton onClick={removeProduct}>&#10005;</RemoveButton>
    </CheckoutItemContainer>
  );
};

export default CheckoutCard;
