import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteBook } from "../store/cart";

export const CartProduct = (props) => {
  const dispatch = useDispatch();

  let book = props.book;
  let idx = props.idx

  const [quantity, setQuantity] = useState(book.quantity);
  book.quantity = quantity;

  const handleOnChange = (e) => {
    setQuantity(e.target.value)
    let localproduct = JSON.parse(localStorage.getItem('cart'))
    localproduct[idx].quantity = e.target.value
    localStorage.setItem('cart', JSON.stringify(localproduct))
  }

  const handleOnClick = (book) => {
    let localproduct = JSON.parse(localStorage.getItem('cart'))
    localStorage.cart = JSON.stringify(JSON.parse(localStorage.cart).filter(obj => obj.id !== localproduct[idx].id))
    dispatch(deleteBook(book))
  }

  return (
    <div>
      <div className="cartProduct">
        <img src={book.imageUrl} className="cartProductImg" />
        <div className="cartProductInfo">
          <span className="cartProductTitle">{book.title}</span>
          <span className="cartProductAuthor">{book.author}</span>
          <span className="cartProductPriceQty">
            {" "}
            ${book.price}
            {/* - Quantity: {book.quantity} */}
          </span>
          <div>
            Quantity:
            <Link to="/cart">
            <input
              id="quantity"
              type="number"
              min={1}
              max={99}
              defaultValue={book.quantity}
              onChange={(e) => handleOnChange(e)}
            ></input>
            </Link>
          </div>
        </div>
        <button
          type="button"
          onClick={() => handleOnClick(book)}
          className="deleteButton"
        >
          X
        </button>
      </div>
    </div>
  );
};
