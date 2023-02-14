import React from "react";

function Footer() {
  return (
    <div>
      <div className="justify-between hidden px-10 md:flex">
        <div className="text-gray-600 ">
          <p className="leading-10">Constuctor</p>
          <p className="leading-10 text-gray-400">
            12 Water St. Vacouver,
            <br /> BC V6B 132 United States
          </p>
        </div>
        <div className="leading-9 text-gray-600">
          <p>Corporate Sales</p>
          <p>Feedback</p>
          <p>Jobs</p>
          <p>News</p>
          <p>Sales Rules</p>
          <p>For Partners</p>
        </div>
        <div className="leading-9 text-gray-600">
          <p>Bonus Program</p>
          <p>Gift Cards</p>
          <p>Bill Payment Verification</p>
          <p>Loans</p>
          <p>Delivery</p>
          <p>Service Centers</p>
        </div>
        <div className="leading-9 text-gray-600">
          <p>How to place an order</p>
          <p>Ways of Payment</p>
          <p>Exchange & Return of goods</p>
          <p>Warranty service</p>
          <p>Order Status</p>
          <p>Knowledge Base</p>
        </div>
        <div className="leading-10 text-gray-400">
          <p>2030 Company. All Rights Reserved.</p>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
