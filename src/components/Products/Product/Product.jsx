import React from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  addItemToCart,
  removeItemFromCart,
  updateCartItem,
} from "../../../store/cart/cart.actions";

const Product = ({ product }) => {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.cart);
  const handleRemove = () => {
    dispatch(removeItemFromCart())
  }
  return (
    <div data-cy={`product-${product.id}`}>
      <h3 data-cy="product-name">{product.name}</h3>
      <h6 data-cy="product-description">{product.description}</h6>
      <button data-cy="product-add-item-to-cart-button"></button>
      <div>
        <button data-cy="product-increment-cart-item-count-button"></button>
        <span data-cy="product-count"></span>
        <button data-cy="product-decrement-cart-item-count-button"></button>
        <button data-cy="product-remove-cart-item-button" onClick={handleRemove}>Remove from Cart</button>
      </div>
    </div>
  );
};

export default Product;
