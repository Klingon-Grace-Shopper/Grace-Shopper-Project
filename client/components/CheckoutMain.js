import React, { useState } from "react";
// import { withRouter, Route, Switch, Redirect, Link } from "react-router-dom";
import { Link } from "react-router-dom";

import Cart from "./Cart";
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
    secCode: secCode
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // dispatch(editBookThunk(book[0].id, newBook));
    setTimeout(function () {
      history.push("/home");
    }, 15);
  };

  return (
    <div className="main">
      <h1>MCK Books</h1>
      <h6>Cart > Information > Shipping > Payment</h6>
      <div>
        <h2 className='checkoutHeading'>Contact Information</h2>
        <div className="checkoutFormContainer">
          <form className="checkoutForm" onSubmit={handleSubmit}>
            <input
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              type="text"
              defaultValue={"Email"}
            />

            <h2 className='checkoutHeading'>Shipping Address</h2>
            <div className="checkoutFormNameInfo">
              <input
                className="checkoutInput"
                name="firstName"
                onChange={(e) => setFirstName(e.target.value)}
                type="text"
                defaultValue={"First name"}
              />
              <input
                className="checkoutInput"
                name="lastName"
                onChange={(e) => setLastName(e.target.value)}
                type="text"
                defaultValue={"Last name"}
              />
            </div>
            <input
              className="checkoutInput"
              name="address"
              onChange={(e) => setAddress(e.target.value)}
              type="text"
              defaultValue={"Address"}
            />
            <input
              className="checkoutInput"
              name="addressExtra"
              onChange={(e) => setAddressExtra(e.target.value)}
              type="text"
              defaultValue={"Apartment, suite, etc. (optional)"}
            />
            <input
              className="checkoutInput"
              name="city"
              onChange={(e) => setCity(e.target.value)}
              type="text"
              defaultValue={"City"}
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
                defaultValue={"Zip code"}
              />
            </div>
            <input
              className="checkoutInput"
              name="Phone"
              onChange={(e) => setPhone(e.target.value)}
              type="text"
              defaultValue={"Phone"}
            />
          </form>
        </div>
      </div>
      <h2 className='checkoutHeading'>Shipping</h2>
      <div>
        Free shipping
        <input
          type="radio"
          value="Free"
          onChange={(e) => setShipping(e.target.value)}
        />
        Express shipping
        <input
          type="radio"
          value="$15"
          onChange={(e) => setShipping(e.target.value)}
        />
      </div>
      <h2 className='checkoutHeading'>Payment</h2>
      Credit Card
      <input
        type="radio"
        value="CreditCard"
        onChange={(e) => setPaymentType(e.target.value)}
      />
      <form className="checkoutForm" onSubmit={handleSubmit}>
        <input
          className="checkoutInput"
          name="cardNumber"
          onChange={(e) => setCardNum(e.target.value)}
          type="text"
          defaultValue={"Card number"}
        />
        <input
          className="checkoutInput"
          name="expDate"
          onChange={(e) => setExpDate(e.target.value)}
          type="text"
          defaultValue={"Expiration date (MM/YY)"}
        />
        <input
          className="checkoutInput"
          name="secCode"
          onChange={(e) => setSecCode(e.target.value)}
          type="text"
          defaultValue={"Security code"}
        />
      </form>
      <Link to="/thankyou">
        <button>Pay Now</button>
      </Link>
      <Link to="/cart">
        <button>Return to cart</button>
      </Link>
    </div>
  );
};
