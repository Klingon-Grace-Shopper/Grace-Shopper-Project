import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { authenticate } from "../store";
import { Link } from "react-router-dom";

/**
 * COMPONENT
 */
const Login = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const error = useSelector((state) => state.auth.error);
  const dispatch = useDispatch();
  const history = useHistory();
  let isLoggedIn = useSelector((state) => state.auth);

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(authenticate(username, password, "login"));
  };

  return (
    <div className="main">
      <form onSubmit={handleSubmit} name={name}>
        <div>
          <label htmlFor="username">
            <small>Username</small>
          </label>
          <input
            onChange={(e) => setUserName(e.target.value)}
            name="username"
            type="text"
          />
        </div>
        <div>
          <label htmlFor="password">
            <small>Password</small>
          </label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            name="password"
            type="password"
          />
        </div>
        <div>
          <button type="submit">Login</button>
        </div>
        {error && error.response && <div> {error.response.data} </div>}
      </form>
      <span>
        New customer? <Link to="/signup">Sign up!</Link>
      </span>
    </div>
  );
};

export default Login;
