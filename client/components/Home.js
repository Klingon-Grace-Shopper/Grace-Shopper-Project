import React from "react";
import { connect } from "react-redux";
import { AllBooks } from "./AllBooks";
import Carousel from "./Carousel";

/**
 * COMPONENT
 */
export const Home = (props) => {
  const { username } = props;

  return (
    <div className="main">
      <Carousel />
      <AllBooks />
    </div>
  );
};

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    username: state.auth.username,
  };
};

export default connect(mapState)(Home);
