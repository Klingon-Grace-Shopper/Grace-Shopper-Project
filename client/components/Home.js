import React, { useEffect } from "react";
import { connect, useSelector, useDispatch } from "react-redux";
import AllBooks from "./AllBooks";
import Carousel from "./Carousel";


/**
 * COMPONENT
 */
export const Home = () => {
  //This is componentDidMount

  return (
    <div className="main">
      <Carousel />
      <AllBooks />
    </div>
  );
};
export default Home;
