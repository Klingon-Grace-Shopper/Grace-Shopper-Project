import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteBook } from "../store/cart";

export const CartProduct = (props) => {
  const dispatch = useDispatch();

  let book = props.book;

  const [quantity, setQuantity] = useState(book.quantity);
  book.quantity = quantity;
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
            <input
              id="quantity"
              type="number"
              min={1}
              max={99}
              defaultValue={book.quantity}
              onChange={(e) => setQuantity(e.target.value)}
            ></input>
            <Link to="/cart">
              <button className='changeQtyBtn'>Apply</button>
            </Link>
          </div>
        </div>
        <button
          type="button"
          onClick={() => dispatch(deleteBook(book))}
          className="deleteButton"
        >
          X
        </button>
      </div>
    </div>
  );
};
