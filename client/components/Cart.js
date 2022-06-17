import React from "react";
import { useSelector } from "react-redux";
import { CartProduct } from "./CartProduct";

export const Cart = () => {
  let { cart } = useSelector((state) => {
    return state;
  })

  let total = cart.reduce(
    (total, book) => total + book.price * book.quantity,
    0
  );

  return cart.length ? (

    <div className="Cart">
      <h1>Cart</h1>

      {cart.map((book) => (
        <div key={book.id}>{<CartProduct book={book}  />}</div>
      ))}
      <span id="total">Total: ${total}</span>
      <button>Proceed to checkout</button>
    </div>
  ) : (
    <div>
      <h1>Cart</h1>
      <div className="Cart">There are no products in your cart!</div>
    </div>
  );
};
