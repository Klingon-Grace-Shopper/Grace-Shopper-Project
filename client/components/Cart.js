import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchAllBooks } from "../store/Books";
import { CartProduct } from "./CartProduct";
import { deleteBook } from "../store/cart";

export const Cart = () => {
  let { cart } = useSelector((state) => {
    return state;
  });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllBooks());
  }, []);

  let total = cart.reduce(
    (total, book) => total + book.price * book.quantity,
    0
  );

  // const bookTracker = {};

  // for (let i = 0; i < cart.length; i++) {
  //   if (!bookTracker[cart[i].id]) {
  //     bookTracker[cart[i].id] = cart[i];
  //   } else {
  //     bookTracker[cart[i].id].quantity += cart[i].quantity - 1;
  //   }
  // }

  // console.log('BT', bookTracker)

  // cart = [];

  // cart = Object.values(bookTracker);
  // console.log("CARTDICTIONARY", cart);

  return cart.length ? (
    <div className="Cart">
      <h1>Cart</h1>

      {/* //filtering through cart, check repeating books
      //if repeating, merged qty */}

      {cart.map((book) => (
        <div key={book.id}>{<CartProduct book={book} />}</div>
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
