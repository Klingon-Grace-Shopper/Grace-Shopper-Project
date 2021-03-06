import React, { useEffect, useState } from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchBook, deleteBookThunk } from "../store/Books";
import { addBookIntoCart, fetchBookIntoCart } from "../store/cart";

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

  const user = useSelector((state) => {
    return state.auth;
  });

  const history = useHistory();

  const [quantity, setQuantity] = useState(1);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBook(id));
  }, []);

  return (
    <div className="singleBook">
      {user.isAdmin ? (
        <div>
          <Link
            to={{
              pathname: `/books/${id}/edit`,
              query: {
                title: "hello",
                author: book[0].author,
                description: book[0].description,
                imageUrl: book[0].imageUrl,
                price: book[0].price,
                inventory: book[0].inventory,
                isRare: book[0].isRare,
              },
            }}
          >
            <button>Edit</button>
          </Link>

          <button
            onClick={() => {
              dispatch(deleteBookThunk(id));
              setTimeout(function () {
                history.push("/home");
              }, 15);
            }}
          >
            Delete
          </button>
        </div>
      ) : (
        <></>
      )}
      {book.length > 0 ? (
        <div className="singleBookParent">
          <div className="singleBookInfo">
            <div className="singleBookTitle">{book[0].title}</div>
            <div className="singleBookAuthor">{book[0].author}</div>
            <div className="singleBookPrice">${book[0].price}</div>
            <div className="singleBookButtons">
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
              <span>
                <button
                  className="addBookToCart"
                  onClick={() =>
                    dispatch(
                      addBookIntoCart(book[0].id, parseInt(quantity), userId)
                    )
                  }
                >
                  Add to Cart
                </button>
              </span>
            </div>
            <div>{book[0].description}</div>
          </div>
          <img src={book[0].imageUrl} className="singleBookImg" />
        </div>
      ) : (
        ""
      )}
    </div>
  );
};
