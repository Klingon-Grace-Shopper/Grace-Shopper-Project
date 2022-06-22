import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import history from "../history";

import { Link, useParams } from "react-router-dom";
import { logout } from "../store";

import AccountBoxIcon from "@material-ui/icons/AccountBox";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";

const Navbar = () => {
  let user = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleLogout = (e) => {
    dispatch(logout());
  };

  const handleGoToHistory = () => {
    history.push("/users/history");
  };

  return (
    <div className="sidenav">
      <div id="logo-container">
        <span>MCK Books</span>
        {user.isAdmin ? (
          <div>
            <div>
              <Link to="/allusers">Admin User View</Link>
            </div>
            <div>
              <Link to="/addbook">Add a book</Link>
            </div>
            <button onClick={handleGoToHistory}>History</button>
            <button onClick={handleLogout}>Logout</button>
          </div>
        ) : user.id ? (
          <div>
            <AccountBoxIcon />
            <button onClick={handleGoToHistory}>History</button>
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
      </div>
      <nav id="main-nav">
        <div id="main-nav-container">
          <div>
            <Link to="/home">Home</Link>
          </div>
          <div>
            <Link to="/search">Search</Link>
          </div>
          <div>
            <Link to="/currentTitles">Current Titles</Link>
          </div>
          {/* <Link to="/comingSoon">Coming Soon</Link> */}
          <div>
            <Link to="/rare">Rare Books </Link>
          </div>
          <div>
            <Link to="/under50">Under 50</Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
