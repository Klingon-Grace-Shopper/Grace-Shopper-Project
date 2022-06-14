import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../store";

const Navbar = ({ handleClick, isLoggedIn }) => (
  <div className="sidenav">
    <div id="logo-container">
      <span>logo</span>
      <span>user</span>
      <span>cart</span>
      <span>search</span>
    </div>
    <nav id="main-nav">
      <div id="main-nav-container">
        <Link to="/home">Home</Link>
        <Link to="/currentTitles">Current Titles</Link>
        <Link to="/comingSoon">Coming Soon</Link>
        <Link to="/rare">Rare!!!!!!🧑 </Link>
      </div>
    </nav>
  </div>
);

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    isLoggedIn: !!state.auth.id,
  };
};

const mapDispatch = (dispatch) => {
  return {
    handleClick() {
      dispatch(logout());
    },
  };
};

export default connect(mapState, mapDispatch)(Navbar);
