import React, { useReducer } from "react";
import { useSelector, useDispatch } from "react-redux";

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_TEXT":
      return { ...state, [action.field]: action.payload };
    default:
      return state;
  }
};

export const SignUp = () => {
  const [state, dispatch] = useReducer(reducer, {
    username: "",
    password: "",
  });

  const error = useSelector((state) => state.auth.error);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleOnChange = (e) => {
    dispatch({
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
          <button type="submit">Sign Up</button>
        </div>
        {error && error.response && <div> {error.response.data} </div>}
      </form>
    </div>
  );
};
