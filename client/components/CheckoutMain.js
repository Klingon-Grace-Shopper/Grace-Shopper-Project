import React, { useState } from "react";
// import { withRouter, Route, Switch, Redirect, Link } from "react-router-dom";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { createOrder } from "../store/order";

// import CartProduct from "./CartProduct";
// import CheckoutInfo from "./CheckoutInfo";
// import CheckoutShipping from "./CheckoutShipping";
// import CheckoutPayment from "./CheckoutPayment";

export const CheckoutMain = () => {
  console.log("inside checkout");
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [addressExtra, setAddressExtra] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState("");
  const [phone, setPhone] = useState("");

  const [shipping, setShipping] = useState("");

  const [paymentType, setPaymentType] = useState("");

  const [cardNum, setCardNum] = useState("");
  const [cardName, setCardName] = useState("");
  const [expDate, setExpDate] = useState("");
  const [secCode, setSecCode] = useState("");

  let shippingInfo = {
    email: email,
    firstName: firstName,
    lastName: lastName,
    address: address,
    addressExtra: addressExtra,
    city: city,
    country: country,
    state: state,
    zip: zip,
    phone: phone,
  };

  let paymentInfo = {
    shipping: shipping,
    paymentType: paymentType,
    cardNum: cardNum,
    cardName: cardName,
    expDate: expDate,
    secCode: secCode,
  };

  const dispatch = useDispatch();

  let { cart } = useSelector((state) => {
    return state;
  });
  let userId = useSelector((state) => state.auth.id);

  const handleOnClick = () => {
    if (userId > 0) {
      dispatch(createOrder(cart, userId));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // dispatch(editBookThunk(book[0].id, newBook));
    // setTimeout(function () {
    //   history.push("/home");
    // }, 15);
  };

  return (
    <div className="checkoutContainer">
      <div className="checkoutLeft">
        <h1>MCK Books</h1>
        <h6>Cart > Information > Shipping > Payment</h6>
        <div>
          <h2 className="checkoutHeading">Contact Information</h2>
          <div className="checkoutFormContainer">
            <form className="checkoutForm" onSubmit={handleSubmit}>
              {/* <label htmlFor="email">Email</label> */}
              <input
                className="checkoutInput"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
                type="text"
                placeholder={"Email"}
              />

              <h2 className="checkoutHeading">Shipping Address</h2>
              <div className="checkoutFormNameInfo">
                <input
                  className="checkoutInput"
                  name="firstName"
                  onChange={(e) => setFirstName(e.target.value)}
                  type="text"
                  placeholder={"First name"}
                />
                <input
                  className="checkoutInput"
                  name="lastName"
                  onChange={(e) => setLastName(e.target.value)}
                  type="text"
                  placeholder={"Last name"}
                />
              </div>
              <input
                className="checkoutInput"
                name="address"
                onChange={(e) => setAddress(e.target.value)}
                type="text"
                placeholder={"Address"}
              />
              <input
                className="checkoutInput"
                name="addressExtra"
                onChange={(e) => setAddressExtra(e.target.value)}
                type="text"
                placeholder={"Apartment, suite, etc. (optional)"}
              />
              <input
                className="checkoutInput"
                name="city"
                onChange={(e) => setCity(e.target.value)}
                type="text"
                placeholder={"City"}
              />
              <div className="checkoutFormCityStateZipInfo">
                <select
                  name="country"
                  onChange={(e) => setCountry(e.target.value)}
                >
                  <option value={"United States"}>United States</option>
                </select>
                <select name="state" onChange={(e) => setState(e.target.value)}>
                  <option value={"New York"}>New York</option>
                  <option value={"California"}>California</option>
                </select>
                <input
                  className="checkoutInput"
                  name="zip"
                  onChange={(e) => setZip(e.target.value)}
                  type="text"
                  placeholder={"Zip code"}
                />
              </div>
              <input
                className="checkoutInput"
                name="Phone"
                onChange={(e) => setPhone(e.target.value)}
                type="text"
                placeholder={"Phone"}
              />
            </form>
          </div>
        </div>
        <h2 className="checkoutHeading">Shipping</h2>
        <div>
          Free shipping
          <input
            type="radio"
            name="shippingSelection"
            value="Free"
            onChange={(e) => setShipping(e.target.value)}
          />
          Express shipping
          <input
            type="radio"
            name="shippingSelection"
            value="$15"
            onChange={(e) => setShipping(e.target.value)}
          />
        </div>
        <h2 className="checkoutHeading">Payment</h2>
        {/* Visa
        <input
          type="radio"
          name="ccInfo"
          value="Visa"
          onChange={(e) => setPaymentType(e.target.value)}
        />
        Mastercard
        <input
          type="radio"
          name="ccInfo"
          value="Mastercard"
          onChange={(e) => setPaymentType(e.target.value)}
        />
        AMEX
        <input
          type="radio"
          name="ccInfo"
          value="AMEX"
          onChange={(e) => setPaymentType(e.target.value)}
        /> */}
        <form className="checkoutForm" onSubmit={handleSubmit}>
          <input
            className="checkoutInput"
            name="cardNumber"
            onChange={(e) => setCardNum(e.target.value)}
            type="text"
            placeholder={"Card number"}
          />
          <input
            className="checkoutInput"
            name="expDate"
            onChange={(e) => setExpDate(e.target.value)}
            type="text"
            placeholder={"Expiration date (MM/YY)"}
          />
          <input
            className="checkoutInput"
            name="secCode"
            onChange={(e) => setSecCode(e.target.value)}
            type="text"
            placeholder={"Security code"}
          />
        </form>

        <button className="submitOrderBtn" onClick={() => handleOnClick()}>
          Submit Order
        </button>

        <Link to="/cart">
          <button className="returnToCartBtn">Return to cart</button>
        </Link>
      </div>
      {/* <div className="checkoutCart">
        <h1>Cart</h1>
        {cart.map((book) => (
          <div key={book.id}>
            {book.title}
            <br></br>
            {book.author}
          </div>
        ))}
        <div className="cartInfo">
          <span id="cartTotal">
            Total: <strong>${total}</strong>
          </span>
        </div>
      </div> */}
    </div>
  );
};
