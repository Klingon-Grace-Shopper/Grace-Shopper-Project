import React, { useReducer } from "react";
import { useSelector, useDispatch } from "react-redux";
import { createUser } from "../store/User";

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_TEXT":
      return { ...state, [action.field]: action.payload };
    default:
      return state;
  }
};

export const SignUp = () => {
  const dispatch = useDispatch();
  const [state, userDispatch] = useReducer(reducer, {
    username: "",
    password: "",
    email: "",
  });

  const error = useSelector((state) => state.auth.error);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createUser(state));
  };

  const handleOnChange = (e) => {
    userDispatch({
      type: "SET_TEXT",
      field: e.target.name,
      payload: e.target.value,
    });
  };

  return (
    <div className="main">
      {console.log(state)}
      <form onSubmit={handleSubmit} name={name} className="signup-form">
        <div>
          <label htmlFor="username">
            <small>Username</small>
          </label>
          <input
            onChange={handleOnChange}
            type="SET_USERNAME"
            name="username"
          />
        </div>
        <div>
          <label htmlFor="password">
            <small>Password</small>
          </label>
          <input
            onChange={handleOnChange}
            type="SET_PASSWORD"
            name="password"
          />
        </div>
        <div>
          <label htmlFor="email">
            <small>Email</small>
          </label>
          <input onChange={handleOnChange} type="SET_EMAIL" name="email" />
        </div>

        <div>
          <button type="submit">Sign Up</button>
          {error && error.response && <div> {error.response.data} </div>}
        </div>
      </form>
    </div>
  );
};
