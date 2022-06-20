import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchBook } from "../store/Books";
import { addBookIntoCart } from "../store/cart";

export const SingleBook = () => {
  let userId = useSelector((state) => state.auth.id) || -1;
  // let isLoggedIn =
  const { id } = useParams();
  const { book } = useSelector((state) => {
    return state;
  });

  const { cart } = useSelector((state) => {
    return state;
  });

  const [quantity, setQuantity] = useState(1);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBook(id));
  }, []);

  return (
    <div className="singleBook">
      {book.length > 0 ? (
        <div className="singleBookInfo">
          <div>{book[0].title}</div>
          <div>{book[0].author}</div>
          <div>${book[0].price}</div>
          <div>
            {/* <button>-</button> */}
            Quantity:{" "}
            <input
              id="quantity"
              type="number"
              min={1}
              max={99}
              defaultValue={1}
              onChange={(e) => setQuantity(e.target.value)}
            ></input>
            {/* <button>+</button> */}
          </div>
          <button
            onClick={() =>
              dispatch(addBookIntoCart(book[0].id, quantity, userId))
            }
          >
            Add to Cart
          </button>
          <div>{book[0].description}</div>
          <img src={book[0].imageUrl} className="singleBookImg" />
        </div>
      ) : (
        ""
      )}
    </div>
  );
};
