import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchAllUsers } from "../store/user";

const AdminAllUsers = () => {
  const { user } = useSelector((state) => {
    return state;
  });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllUsers());
  }, []);

  return (
    <div id="all-users" className="main">
      {user.map((user) => (
        <div key={user.id}>
          <Link to={`/user`}>
            <h6>{user.username}</h6>
            <h6>{user.email}</h6>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default AdminAllUsers;
