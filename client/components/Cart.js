import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { CartProduct } from "./CartProduct";
import { Link } from "react-router-dom";
import { fetchBookIntoCart } from "../store/cart";
import auth from "../store/auth";

export const Cart = () => {
  let { cart } = useSelector((state) => {
    return state;
  });
  let logginId = useSelector((state) => state.auth.id);

  const dispatch = useDispatch();

  useEffect(() => {
    logginId > 0 ? dispatch(fetchBookIntoCart(logginId)) : "";
  }, []);

  let total = cart.reduce(
    (total, book) => total + book.price * book.quantity,
    0
  );

  return cart.length ? (
    <div className="cart">
      <h1>Cart</h1>
      {console.log(cart)}
      {cart.map((book) => (
        <div key={book.id}>{<CartProduct book={book} />}</div>
      ))}
      <div className="cartInfo">
        <span id="cartTotal">
          Total: <strong>${total}</strong>
        </span>
        <button className="checkoutBtn">Proceed to checkout</button>
      </div>
    </div>
  ) : (
    <div>
      <h1>Cart</h1>
      <div className="Cart"> There are no products in your cart!</div>
    </div>
  );
};
