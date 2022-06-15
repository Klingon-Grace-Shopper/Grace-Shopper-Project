import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchBook } from "../store/Books";

export const SingleBook = () => {
  const { id } = useParams();
  const { book } = useSelector((state) => {
    return state;
  });

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
          <div>{book[0].description}</div>
          <img src={book[0].imageUrl} />
        </div>
      ) : (
        ""
      )}
    </div>
  );
};
