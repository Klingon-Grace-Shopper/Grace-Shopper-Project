import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchBook } from "../store/Books";
import { fetchBookIntoCart } from "../store/cart";

export const SingleBook = () => {
  const { id } = useParams();
  const { book } = useSelector((state) => {
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
        <div>
          <div>{book[0].title}</div>
          <div>{book[0].author}</div>
          <div>${book[0].price}</div>
          <div>
            {/* <button>-</button> */}
            Quantity:{" "}
            <input
              id="quantity"
              type="number"
              // value={1}
              onChange={(e) => setQuantity(e.target.value)}
            ></input>
            {/* <button>+</button> */}
          </div>
          <button onClick={() => dispatch(fetchBookIntoCart(book[0].id, quantity))}>
            Add to Cart
          </button>
          <div>{book[0].description}</div>
          <img src={book[0].imageUrl} />
        </div>
      ) : (
        ""
      )}
    </div>
  );
};
