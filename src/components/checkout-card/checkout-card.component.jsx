import React, { useContext } from "react";
import { CartContext } from "../../context/cart.context";

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
  const { addItemsToCart, removeItemsFromCart, decreaseItemsFromCart } =
    useContext(CartContext);
  const { imageUrl, name, quantity, price } = product;

  const increaseProduct = () => {
    addItemsToCart(product);
  };

  const decreaseProduct = () => {
    decreaseItemsFromCart(product);
  };

  const removeProduct = () => {
    removeItemsFromCart(product);
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
      <ItemInfo>{price}</ItemInfo>
      <RemoveButton onClick={removeProduct}>&#10005;</RemoveButton>
    </CheckoutItemContainer>
  );
};

export default CheckoutCard;
