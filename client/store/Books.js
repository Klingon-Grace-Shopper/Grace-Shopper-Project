import axios from "axios";
import history from "../history";

const SET_BOOKS = "SET_BOOKS";
const SET_BOOK = "SET_BOOK";
const DELETE_BOOK = "DELETE_BOOK";

export const setAllBooks = (books) => {
  return {
    type: SET_BOOKS,
    books,
  };
};

export const setBook = (book) => {
  return {
    type: SET_BOOK,
    book,
  };
};

export const deleteBook = (book) => {
  return {
    type: DELETE_BOOK,
    book,
  };
};

export const fetchAllBooks = () => {
  return async (dispatch) => {
    const { data: books } = await axios.get("/api/books/");
    dispatch(setAllBooks(books));
  };
};

export const fetchBook = (id) => {
  return async (dispatch) => {
    const { data: book } = await axios.get(`/api/books/${id}`);
    dispatch(setBook(book));
  };
};

export const deleteBookThunk = (id) => {
  return async (dispatch) => {
    const { data: book } = await axios.delete(`/api/books/${id}`);
    dispatch(deleteBook(book));
  };
};

export const initialState = [];

export default function bookReducer(state = initialState, action) {
  switch (action.type) {
    case SET_BOOKS:
      return [...action.books];
    case SET_BOOK:
      return [action.book];
    case DELETE_BOOK:
      return state.filter((book) => book.id !== action.book.id);
    default:
      return state;
  }
}
