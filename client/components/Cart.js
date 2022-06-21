import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { CartProduct } from "./CartProduct";

export const Cart = () => {
  let { cart } = useSelector((state) => {
    return state;
  })

  useEffect(()=>{
    localStorage.setItem('cart', JSON.stringify(cart))
  },[cart]);

  if(JSON.parse(localStorage.cart)!== [] && cart.length === 0) {
    cart = JSON.parse(localStorage.cart)
  }

  let total = cart.reduce(
    (total, book) => total + book.price * book.quantity,
    0
  )

  return cart.length ? (
    <div className="cart">
      <h1>Cart</h1>

      {cart.map((book,idx) => (
        <div key={book.id}>{<CartProduct book={book} idx={idx} />}</div>
      ))}
      <div className="cartInfo">
        <span id="cartTotal">Total: <strong>${total}</strong></span>
        <button className="checkoutBtn">Proceed to checkout</button>
      </div>
    </div>
  ) : (
    <div>
      <h1>Cart</h1>
      <div className="Cart"> There are no products in your cart!</div>
    </div>
  );
};
