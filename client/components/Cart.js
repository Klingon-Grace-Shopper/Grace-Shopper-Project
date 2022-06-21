import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { CartProduct } from "./CartProduct";
import { Link } from "react-router-dom";


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
      {cart.map((book) => (
        <div key={book.id}>{<CartProduct book={book} />}</div>
      ))}
      <div className="cartInfo">
        <span id="cartTotal">
          Total: <strong>${total}</strong>
        </span>
        <Link to='/checkout'>
          <button className="checkoutBtn">Proceed to checkout</button>
        </Link>

      </div>
    </div>
  ) : (
    <div>
      <h1>Cart</h1>
      <div className="Cart"> There are no products in your cart!</div>
    </div>
  );
};
