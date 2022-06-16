import axios from "axios";
import history from "../history";

const SET_CART = "SET_CART";

export const setCart = (book) => {
  return {
    type: SET_CART,
    book,
  }
}

export const fetchBookIntoCart = (id) => {
  return async (dispatch) => {
    const { data: book } = await axios.get(`/api/books/${id}`)
    dispatch(setCart(book))
  }
}

export const initialState = [];

export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case SET_CART:
      return [...state, action.book]
    default:
      return state
  }
}
