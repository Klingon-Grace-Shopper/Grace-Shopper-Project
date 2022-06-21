import axios from "axios";
import history from "../history";

const SET_CART = "SET_CART";
const DELETE_BOOK = "DELETE_BOOK";
const UPDATE_BOOK = "UPDATE_BOOK";

export const setCart = (book, qty) => {
  return {
    type: SET_CART,
    book,
    qty,
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

export const fetchBookIntoCart = (id, qty) => {
  return async (dispatch) => {
    const { data: book } = await axios.get(`/api/books/${id}`);
    history.push("/cart");
    dispatch(setCart(book, qty));
  };
};

export const deleteBookInCart = (book) => {
  return (dispatch) => {
    dispatch(deleteBook(book));
  };
};

export const initialState = [];

export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case SET_CART:
      action.book.quantity = +action.qty;
      if(JSON.parse(localStorage.cart) !== []){
        for (let i = 0; i < JSON.parse(localStorage.cart).length; i++) {
          if (JSON.parse(localStorage.cart)[i].id === action.book.id) {
            action.book.quantity += +JSON.parse(localStorage.cart)[i].quantity;
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
    case DELETE_BOOK:
      state = state.filter((book) => {
        return book.id !== action.book.id;
      });
      return [...state];
    default:
      return state;
  }
}
