import axios from 'axios'
import history from '../history'

const SET_BOOKS = 'SET_BOOKS'

export const setAllBooks = (books) => {
  return {
    type: SET_BOOKS,
    books
  }
}

export const fetchAllBooks = () => {
  return async (dispatch) => {
    const { data: books } = await axios.get('/api/books/')
    dispatch(setAllBooks(books))
  }
}

export const initialState = []
export default function allBooksReducer(state = initialState, action) {
  switch (action.type) {
    case SET_BOOKS:
      return [...action.books]
    default:
      return state
  }
}
