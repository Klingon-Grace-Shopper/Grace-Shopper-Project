import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchAllBooks } from "../store/Books";

const AllBooks = () => {
  let numOfBooks = 12;
  const pathName = window.location.pathname;
  const { book } = useSelector((state) => {
    return state;
  });

  const [sorting, setSort] = useState("normal");

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllBooks());
  }, []);

  if (pathName === "/currentTitles") {
    numOfBooks = book.length;
  }

  return (
    <div className="main">
      <span id="sortOptions">Sort options:</span>
      <select
        id="sortMenu"
        name="sort"
        onChange={(e) => setSort(e.target.value)}
        type="text"
        defaultValue="sort By"
      >
        <option value="TitleA">Title: A-Z</option>
        <option value="TitleD">Title: Z-A</option>
        <option value="PriceA">Price: Low-High</option>
        <option value="PriceD">Price: High-Low</option>
      </select>
      {sorting === "PriceA" ? (
        <div id="all-books">
          {book
            .slice(0, numOfBooks)
            .sort((a, b) => a.price - b.price)
            .map((book) => (
              <div key={book.id}>
                <Link to={`/books/${book.id}`}>
                  <img src={book.imageUrl} className="grow" />
                  <h6>{book.title}</h6>
                  <h6>{book.author}</h6>
                </Link>
              </div>
            ))}
        </div>
      ) : sorting === "PriceD" ? (
        <div id="all-books">
          {book
            .slice(0, numOfBooks)
            .sort((a, b) => b.price - a.price)
            .map((book) => (
              <div key={book.id}>
                <Link to={`/books/${book.id}`}>
                  <img src={book.imageUrl} className="grow" />
                  <h6>{book.title}</h6>
                  <h6>{book.author}</h6>
                </Link>
              </div>
            ))}
        </div>
      ) : sorting === "TitleA" ? (
        <div id="all-books">
          {book
            .slice(0, numOfBooks)
            .sort((a, b) => (a.title > b.title ? 1 : -1))
            .map((book) => (
              <div key={book.id}>
                <Link to={`/books/${book.id}`}>
                  <img src={book.imageUrl} className="grow" />
                  <h6>{book.title}</h6>
                  <h6>{book.author}</h6>
                </Link>
              </div>
            ))}
        </div>
      ) : sorting === "TitleD" ? (
        <div id="all-books">
          {book
            .slice(0, numOfBooks)
            .sort((a, b) => (b.title > a.title ? 1 : -1))
            .map((book) => (
              <div key={book.id}>
                <Link to={`/books/${book.id}`}>
                  <img src={book.imageUrl} className="grow" />
                  <h6>{book.title}</h6>
                  <h6>{book.author}</h6>
                </Link>
              </div>
            ))}
        </div>
      ) : (
        <div id="all-books">
          {book.slice(0, numOfBooks).map((book) => (
            <div key={book.id}>
              <Link to={`/books/${book.id}`}>
                <img src={book.imageUrl} className="grow" />
                <h6>{book.title}</h6>
                <h6>{book.author}</h6>
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AllBooks;
