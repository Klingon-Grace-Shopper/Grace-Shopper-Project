import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchAllBooks } from "../store/Books";

const AllBooks = () => {
  const { book } = useSelector((state) => {
    return state;
  });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllBooks());
  }, []);

  return (
    <div id="all-books">
      {console.log("RETURNING NEW DATA")}
      {book.map((book) => (
        <div key={book.id}>
          <Link to={`/books/${book.id}`}>
            <img src={book.imageUrl} className='grow' />
            <h6>{book.title}</h6>
            <h6>{book.author}</h6>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default AllBooks;
