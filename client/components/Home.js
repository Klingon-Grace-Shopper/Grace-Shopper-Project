import React, { useEffect } from "react";
import { connect, useSelector, useDispatch } from "react-redux";
import AllBooks from "./AllBooks";

/**
 * COMPONENT
 */
export const Home = () => {
  //This is componentDidMount

  return (
    <div>
      <AllBooks />
    </div>
  );
};
export default Home;
