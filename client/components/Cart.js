import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchAllBooks } from "../store/Books";

export const Cart = () => {
  const { cart } = useSelector((state) => {
    return state;
  });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllBooks());
  }, []);

  let total = cart.reduce((total, book) => total + book.price, 0);

  return cart.length ? (
    <div className="Cart">
      <h1>Cart</h1>
      {cart.map((book) => (
        <div key={book.id}>
          <Link to={`/books/${book.id}`}>
            <img src={book.imageUrl} />
            <h6>{book.title}</h6>
            <h6>{book.author}</h6>
          </Link>
        </div>
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
