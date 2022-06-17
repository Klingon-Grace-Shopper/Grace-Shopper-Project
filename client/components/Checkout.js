import React from "react";
import { useSelector } from "react-redux";

export const Checkout = () => {
  let { cart } = useSelector((state) => {
    return state;
  });

  return <div className="main">{console.log(cart)}Checkout</div>;
};
