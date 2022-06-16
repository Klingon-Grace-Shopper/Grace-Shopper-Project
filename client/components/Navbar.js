import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { Link, useParams } from "react-router-dom";
import { logout } from "../store";

<<<<<<< Updated upstream
const Navbar = () => {
  let isLoggedIn = useSelector((state) => state.auth);
  const dispatch = useDispatch();
=======
const Navbar = ({ handleClick, isLoggedIn }) => (
  <div className="sidenav">
    <div id="logo-container">
      <span>logo</span>
      <span>user</span>
      <Link to="/cart">cart</Link>
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
>>>>>>> Stashed changes

  const handleLogout = (e) => {
    dispatch(logout());
  };

  return (
    <div className="sidenav">
      <div id="logo-container">
        <span>logo</span>
        {isLoggedIn.id ? (
          <div>
            <div>Temp profile</div>
            <button onClick={handleLogout}>Logout</button>
          </div>
        ) : (
          <div>
            {/* <Link to="/userAccount">Profile</Link> */}
            <Link to="/login">Icon</Link>
          </div>
        )}
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
};

export default Navbar;
