import React, { useEffect } from "react";
import { connect, useSelector, useDispatch } from "react-redux";
import AllBooks from "./AllBooks";
import FeaturedCarousel from "./Carousel";

/**
 * COMPONENT
 */
export const Home = () => {
  //This is componentDidMount

  return (
    <div className='home'>
      <FeaturedCarousel />
      <AllBooks />
    </div>
  );
};
export default Home;
