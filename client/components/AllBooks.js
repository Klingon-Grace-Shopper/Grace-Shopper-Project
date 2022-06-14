import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchAllBooks } from "../store/allBooks";

const AllBooks = () => {
  const { allBooks } = useSelector(state => {
    return state
  })

  const dispatch = useDispatch()


  useEffect(() => {
    dispatch(fetchAllBooks())
  }, []);

  return (
    <div id="all-books">
      {console.log(allBooks)}
      {allBooks.map((book) => (
        <div key = {book.id}>
          <img src={book.imageUrl} />
          <h6>{book.title}</h6>
          <h6>{book.author}</h6>
        </div>
      ))}
    </div>
  )
}

export default AllBooks
