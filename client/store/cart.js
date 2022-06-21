import axios from "axios";
import history from "../history";
import { me } from "./auth";

const SET_CART = "SET_CART";
const DELETE_BOOK = "DELETE_BOOK";
const UPDATE_BOOK = "UPDATE_BOOK";
const ADD_TO_CART = "ADD_TO_CART";

export const setCart = (books) => {
  return {
    type: SET_CART,
    books,
  };
};

export const addToCart = (book, qty, userId) => {
  return {
    type: ADD_TO_CART,
    book: book,
    qty,
    userId,
  };
};

export const deleteBook = (book) => {
  return {
    type: DELETE_BOOK,
    book,
  };
};

export const updateBook = (book) => {
  return {
    type: UPDATE_BOOK,
    book,
  };
};

export const addBookIntoCart = (id, qty, userId) => {
  return async (dispatch) => {
    const { data: book } = await axios.get(`/api/books/${id}`);
    if (userId > 0) {
      const { data: cart } = await axios.post("/api/cart", {
        bookId: id,
        quantity: qty,
        userId: userId,
      });
    }
    history.push("/cart");
    dispatch(addToCart(book, qty, userId));
  };
};

export const fetchBookIntoCart = (userId) => {
  return async (dispatch) => {
    const { data } = await axios.get(`/api/cart/${userId}`);
    let bookList = [];
    for (let i = 0; i < data.length; i++) {
      let book = await axios.get(`api/books/${data[i].bookId}`);
      book.data.quantity = data[i].quantity;
      bookList.push(book.data);
    }
    dispatch(setCart(bookList));
  };
};

export const updateBookInCart = (book, userId, value) => {
  return async (dispatch) => {
    if (userId > 0) {
      const bookCart = await axios.put(`/api/cart/${userId}/${book.id}`, {
        quantity: +value,
      });
    }
    book.quantity = value;
    dispatch(updateBook(book));
  };
};

export const deleteBookInCart = (book, userId) => {
  return async (dispatch) => {
    if (userId > 0) {
      let deletedBook = await axios.delete(`/api/cart/${userId}/${book.id}`);
    }
    dispatch(deleteBook(book));
  };
};

export const initialState = [];

export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_CART:
      action.book.quantity = +action.qty;
      if(JSON.parse(localStorage.cart) !== []){
        for (let i = 0; i < JSON.parse(localStorage.cart).length; i++) {
          if (JSON.parse(localStorage.cart)[i].id === action.book.id) {
            action.book.quantity = action.book.quantity + (+JSON.parse(localStorage.cart)[i].quantity);
          }
        }
        state = [...JSON.parse(localStorage.cart)]
      }
      else{
        for (let i = 0; i < state.length; i++) {
          if (state[i].id === action.book.id) {
            action.book.quantity += state[i].quantity;
          }
        }
      }
      state = state.filter((book) => book.id !== action.book.id);
      return [...state, action.book];
    case SET_CART:
      state = action.books;
      return state;
    case DELETE_BOOK:
      state = state.filter((book) => {
        return book.id !== action.book.id;
      });
      return [...state];
    case UPDATE_BOOK:
      return state.map((book) =>
        book.id === action.book.id ? action.book : book
      );
    default:
      return state;
  }
}
