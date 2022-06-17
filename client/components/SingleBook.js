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

  const { cart } = useSelector((state) => {
    return state;
  });

  const [quantity, setQuantity] = useState(1);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBook(id));
  }, []);

  // const existsInCart = (book) => {
  //   for (let i = 0; i < cart.length; i++) {
  //     if (cart[i].id === book.id) {
  //       cart[i].quantity += book.quantity;
  //       break;
  //     }
  //   }

  // }

  // dispatch(fetchBookIntoCart(book.id, quantity))

  return (
    <div className="singleBook">
      {book.length > 0 ? (
        <div className="singleBookInfo">
          <div>{book[0].title}</div>
          <div>{book[0].author}</div>
          <div>${book[0].price}</div>
          <div>
            {/* <button>-</button> */}
            Quantity: {" "}
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
            onClick={() => dispatch(fetchBookIntoCart(book[0].id, quantity)) }
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
