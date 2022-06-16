import axios from "axios";
import history from "../history";

const CREATE_USER = "CREATE_USER";

export const createUserAction = (user) => ({ type: CREATE_USER, user });

export const createUser = (user) => {
  return async (dispatch) => {
    try {
      console.log("dispatch");
      const { data } = await axios.post("/api/users", user);
      console.log("data", data);
      history.push("/home");
      dispatch(createUserAction(data));
    } catch (error) {
      console.error(error);
    }
  };
};

const initialState = [];

export default function userReducer(state = initialState, action) {
  console.log("outer reducer");
  switch (action.type) {
    case CREATE_USER:
      console.log("inside create user reducer");
      return [action.user];
    default:
      return state;
  }
}
