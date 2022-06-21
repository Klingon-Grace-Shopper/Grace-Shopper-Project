import React, { useState } from "react";
import { Link } from "react-router-dom";

// import CheckoutPayment from "./CheckoutPayment";

export const CheckoutShipping = () => {
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [addressExtra, setAddressExtra] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState("");
  const [shipping, setShipping] = useState("");

  const [paymentType, setPaymentType] = useState("")

  const [cardNum, setCardNum] = useState("");
  const [cardName, setCardName] = useState("");
  const [expDate, setExpDate] = useState("");
  const [secCode, setSecCode] = useState("");

  return (
    <div>
      <div>
        <div>Contact: {email}</div>
        <div>
          Ship to: {address},{addressExtra}, {city} {state}, {zip}, {country}
        </div>
        <div> Method: {shipping} </div>
      </div>

      <div className="checkoutFormContainer">
        <input
          type="radio"
          value="CreditCard"
          onChange={(e) => setPaymentType(e.target.value)}
        >
          Credit Card
          <form className="checkoutForm" onSubmit={handleSubmit}>
            <input
              name="cardNumber"
              onChange={(e) => setCardNum(e.target.value)}
              type="text"
              defaultValue={"Card number"}
            />

            <div className="checkoutFormNameInfo">
              <input
                name="cardNum"
                onChange={(e) => setCardName(e.target.value)}
                type="text"
                defaultValue={"Name on card"}
              />
              <input
                name="expDate"
                onChange={(e) => setExpDate(e.target.value)}
                type="text"
                defaultValue={"Expiration date (MM/YY)"}
              />
            </div>
            <input
              name="secCode"
              onChange={(e) => setSecCode(e.target.value)}
              type="text"
              defaultValue={"Security code"}
            />
          </form>
        </input>
        <input
          type="radio"
          value="Paypal"
          onChange={(e) => setPaymentType(e.target.value)}
        >
          Paypal
        </input>
      </div>
      {/* create component + route for below */}
      <Link to="/paymentCompleted">
        <button>Pay Now</button>
      </Link>
      <Link to="/checkoutpayment">
        <button>Return to shipping</button>
      </Link>
    </div>
  );
};
