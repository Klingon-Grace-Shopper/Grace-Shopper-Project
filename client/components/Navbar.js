import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { Link, useParams } from "react-router-dom";
import { logout } from "../store";

const Navbar = () => {
  let user = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleLogout = (e) => {
    dispatch(logout());
  };

  return (
    <div className="sidenav">
      <div id="logo-container">
        <span>logo</span>
        {user.isAdmin ? (
          <div>
            <Link to="/allusers">Admin User View</Link>
            <Link to="/addbook">Add a book</Link>
            <button onClick={handleLogout}>Logout</button>
          </div>
        ) : user.id ? (
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
        <Link to="/cart">cart</Link>
        <span>search</span>
      </div>
      <nav id="main-nav">
        <div id="main-nav-container">
          <Link to="/home">Home</Link>
          <Link to="/currentTitles">Current Titles</Link>
          <Link to="/comingSoon">Coming Soon</Link>
          <Link to="/under50">Under 50</Link>
          <Link to="/rare">Rare!!!!!!🧑 </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
