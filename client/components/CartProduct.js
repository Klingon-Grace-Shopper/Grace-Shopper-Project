import React from "react";
import { useDispatch } from "react-redux";
import { deleteBook } from "../store/cart";

export const CartProduct = (props) => {
  const dispatch = useDispatch();

  let book = props.book;
  //need to add in return:
  //onclick + method to remove book
  //display price + quantity
  return (
    <div className="cartProduct">
      <img src={book.imageUrl} className="cartProductImg" />
      <div className="cartProductInfo">
        <span className="cartProductTitle">{book.title}</span>
        <span className="cartProductAuthor">{book.author}</span>
        <span className="cartProductPriceQty">
          {" "}
          ${book.price} - Quantity: {book.quantity}
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
