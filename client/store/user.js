import axios from "axios";
import history from "../history";

const CREATE_USER = "CREATE_USER";
const GET_USERS = "GET_USERS";
const GET_USER_ORDERS = "GET_USER_ORDERS";
const CLEAR_USER_ORDERS = "CLEAR_USER_ORDERS";

export const createUserAction = (user) => ({ type: CREATE_USER, user });
export const getAllUsers = (users) => ({ type: GET_USERS, users });
export const getAllUserOrders = (orderList) => ({
  type: GET_USER_ORDERS,
  orderList,
});
export const clearUserOrders = () => ({
  type: CLEAR_USER_ORDERS,
});

export const createUser = (user) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.post("/api/users", user);
      history.push("/home");
      dispatch(createUserAction(data));
    } catch (error) {
      console.error(error);
    }
  };
};

export const fetchUserOrder = (userId) => {
  try {
    return async (dispatch) => {
      const { data } = await axios.get(`/api/users/${userId}/bookOrders`);
      const orderList = data;
      if (orderList.length !== 0) {
        for (let j = 0; j < orderList.length; j++) {
          orderList[j].books = [];
          const { data: booksOrders } = await axios.get(
            `/api/bookOrders/${orderList[j].id}`
          );
          for (let i = 0; i < booksOrders.length; i++) {
            let { data: book } = await axios.get(
              `/api/books/${booksOrders[i].bookId}`
            );
            book.quantity = booksOrders[i].quantity;
            orderList[j].books.push(book);
          }
        }
        dispatch(getAllUserOrders(orderList));
      }
    };
  } catch (error) {
    console.log(error);
  }
};

export const fetchAllUsers = () => {
  try {
    return async (dispatch) => {
      const { data: users } = await axios.get("/api/users/");
      dispatch(getAllUsers(users));
    };
  } catch (err) {
    console.error(err);
  }
};

export const clearUserOrder = () => {
  return async (dispatch) => {
    dispatch(clearUserOrders);
    try {
    } catch (error) {
      console.log(error);
    }
  };
};

const initialState = [];

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case CREATE_USER:
      return [action.user];
    case GET_USERS:
      return [...action.users];
    case GET_USER_ORDERS:
      return [...action.orderList];
    case CLEAR_USER_ORDERS:
      action.orderList = [];
      return [...action.orderList];
    default:
      return state;
  }
}
