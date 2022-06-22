import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { CartProduct } from "./CartProduct";
import { Link } from "react-router-dom";
import { fetchBookIntoCart } from "../store/cart";

export const Cart = () => {
  let { cart } = useSelector((state) => {
    return state;
  });
  if (localStorage.cart === []) {
    localStorage.setItem("cart", JSON.stringify(cart));
  }

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  if (JSON.parse(localStorage.cart) !== [] && cart.length === 0) {
    cart = JSON.parse(localStorage.cart);
  }
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
      {cart.map((book, idx) => (
        <div key={book.id}>{<CartProduct book={book} idx={idx} />}</div>
      ))}
      <div className="cartInfo">
        <span id="cartTotal">
          Total: <strong>${total}</strong>
        </span>
        <Link to="/checkout">
          <button className="checkoutBtn">Proceed to checkout</button>
        </Link>
      </div>
    </div>
  ) : (
    <div className="cartEmpty">
      <h1>Cart</h1>
      <div> There are no products in your cart!</div>
    </div>
  );
};
