import axios from "axios";
import history from "../history";

const SET_BOOKS = "SET_BOOKS";
const SET_BOOK = "SET_BOOK";
const DELETE_BOOK = "DELETE_BOOK";
const ADD_BOOK = "ADD_BOOK";
const EDIT_BOOK = "EDIT_BOOK";

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

export const addBook = (book) => {
  return {
    type: ADD_BOOK,
    book,
  };
};

export const editBook = (book) => {
  return {
    type: EDIT_BOOK,
    book,
  };
};

//thunks

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

export const editBookThunk = (id, bookToBeEditted) => {
  return async (dispatch) => {
    const { data: book } = await axios.put(`/api/books/${id}`, bookToBeEditted);
    dispatch(editBook(book));
  };
};

export const addBookThunk = (book) => {
  return async (dispatch) => {
    if (book.imageUrl === "" || undefined) {
      book.imageUrl =
        "https://islandpress.org/sites/default/files/default_book_cover_2015.jpg";
    }
    const { data: created } = await axios.post("/api/books/", book);
    dispatch(addBook(created));
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
    case ADD_BOOK:
      return [...state, action.book];
    case EDIT_BOOK:
      for (let i = 0; i < state.length; i++) {
        if (state[i].id === action.book.id) {
          state[i] = action.book;
        }
      }
      return [...state];
    default:
      return state;
  }
}
