import React, {useState} from "react";

// const [email, setEmail] = useState('')
const email = 'grace@shopper.com'
export const ThankYou = () => {
  return (
    <div className="thankyou">
      <h1 className='thanks'>Thank you for shopping with us!</h1>
      <h3>Your order number is #875432</h3>
      <h4>A confirmation email has been sent to {email}</h4>
    </div>
  );
};
