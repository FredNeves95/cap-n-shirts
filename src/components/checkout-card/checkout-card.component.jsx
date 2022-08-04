import React, { useContext } from "react";
import { CartContext } from "../../context/cart.context";

import "./checkout-card.styles.scss";

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
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={name} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={decreaseProduct}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={increaseProduct}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={removeProduct}>
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutCard;
