import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { Link, useParams } from "react-router-dom";
import { logout } from "../store";

import AccountBoxIcon from "@material-ui/icons/AccountBox";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";

const Navbar = () => {
  let isLoggedIn = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleLogout = (e) => {
    dispatch(logout());
  };

  return (
    <div className="sidenav">
      <div id="logo-container">
        <span>MCK Books</span>
        {isLoggedIn.id ? (
          <div>
            <AccountBoxIcon />
            <button onClick={handleLogout}>Logout</button>
          </div>
        ) : (
          <div>
            {/* <Link to="/userAccount">Profile</Link> */}
            <Link to="/login">
              {" "}
              <AccountBoxIcon />
            </Link>
          </div>
        )}
        <Link to="/cart">
          <ShoppingBasketIcon />
        </Link>
        <span>search</span>
      </div>
      <nav id="main-nav">
        <div id="main-nav-container">
          <Link to="/home">Home</Link>
          <Link to="/currentTitles">Current Titles</Link>
          <Link to="/comingSoon">Coming Soon</Link>
          <Link to="/rare">Rare </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
