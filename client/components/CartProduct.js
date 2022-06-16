import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import { fetchBook } from "../store/Books";
import { deleteBook } from "../store/cart";

export const CartProduct = (props) => {
  const dispatch = useDispatch();

  let book = props.book;
  //need to add in return:
  //onclick + method to remove book
  //display price + quantity
  return (
    <div className="cartProduct">
      <div className="cartProductInfo">
        <img src={book.imageUrl} className="cartProductImg" />
        <span>{book.title}</span>
        <span>{book.author}</span>
        <span>
          {" "}
          ${book.price} x {book.quantity} = {book.quantity * book.price}
        </span>
      </div>
      <button
        type="button"
        onClick={() => dispatch(deleteBook(book))}
        className="deleteButton"
      >
        X
      </button>
    </div>
  );
};
