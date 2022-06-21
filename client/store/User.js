import axios from "axios";
import history from "../history";

const CREATE_USER = "CREATE_USER";
const GET_USERS = "GET_USERS";

export const createUserAction = (user) => ({ type: CREATE_USER, user });
export const getAllUsers = (users) => ({ type: GET_USERS, users });

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

const initialState = [];

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case CREATE_USER:
      return [action.user];
    case GET_USERS:
      return [...action.users];
    default:
      return state;
  }
}
