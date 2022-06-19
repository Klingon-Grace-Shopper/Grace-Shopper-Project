import React ,{ useState }from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteBook } from "../store/cart";

export const CartProduct = (props) => {
  const dispatch = useDispatch();

  let book = props.book;

  const [quantity, setQuantity] = useState(book.quantity);
  book.quantity = quantity
  return (
    <div>
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
      quantity:
      <input
      id="quantity"
      type="number"
      min={1}
      max={99}
      defaultValue={book.quantity}
      onChange={(e) => setQuantity(e.target.value)}
    ></input>
      <Link to='/cart'><button>Apply</button></Link>
  </div>
  );
};
