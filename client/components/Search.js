import React, { useEffect, useState} from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchAllBooks } from "../store/Books";

const Search = () => {
  const { book } = useSelector((state) => {
    return state;
  });

  const [query, SetQuery] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllBooks());
  }, []);

  return (
    <div>
      <div className="searchBox">Search: </div>
      <input
        name="query"
        onChange={(e) => SetQuery(e.target.value)}
        type="text"
        placeholder="Enter your search Here"
        className="searchBox"
      />
      <div id="all-books">
        {book.filter(book => book.title.toLowerCase().startsWith(query)).map((book) => (
          <div key={book.id}>
            <Link to={`/books/${book.id}`}>
              <img src={book.imageUrl} className="grow" />
              <h6>{book.title}</h6>
              <h6>{book.author}</h6>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Search;
