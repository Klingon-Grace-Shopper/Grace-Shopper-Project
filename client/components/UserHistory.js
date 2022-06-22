import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUserOrder } from "../store/User";

export const UserHistory = () => {
  //check if user is logged in. -1 is not and greater than 0 is user id
  let userId = useSelector((state) => state.auth.id) || -1;
  let user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  //if user is logged in then go fetch order when page is loaded
  useEffect(() => {
    if (userId > 0) dispatch(fetchUserOrder(userId));
  }, [userId]);

  return (
    <div className="main">
      {userId < 0 ? (
        <div>YOU ARE NOT LOGGED IN</div>
      ) : (
        <div>
          <div>HISTORY</div>
          {user.map((order, idx) => {
            return (
              <div key={idx}>
                <div>
                  Purchase Date: {order.purchaseDate}, Total: {order.total}
                </div>
                <ul>
                  {order.books.map((book, idx) => {
                    return (
                      <li key={idx}>
                        Book Title: {book.title}, Price: {book.price}, Quantity:
                        {book.quantity}, Total: {book.quantity * book.price}
                        {}
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
