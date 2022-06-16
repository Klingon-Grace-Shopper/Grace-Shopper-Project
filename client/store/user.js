import axios from "axios";
import history from "../history";

const CREATE_USER = "CREATE_USER";

export const createUserAction = (user) => ({ type: CREATE_USER, user });

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

const initialState = [];

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case CREATE_USER:
      return [action.user];
    default:
      return state;
  }
}
