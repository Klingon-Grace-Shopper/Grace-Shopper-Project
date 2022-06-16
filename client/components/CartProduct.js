import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchBook } from "../store/Books";

export const CartProduct = () => {

//this below will likely need to be rewritten
  const { book } = useSelector((state) => {
    return state;
  });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBook(book.id));
  }, []);

  //need to add in return: 
        //onclick + method to remove book
        //display price + quantity

  return (
    <div>
      <h4>{book.name}</h4>
      <div>
        <img src={book.imageUrl} />
        <span>{book.title}</span>
        <span>{book.author}</span>
        <div>
          <button type="button">
            X
          </button>
        </div>
      </div>
    </div>
  );
};
