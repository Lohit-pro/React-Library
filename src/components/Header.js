import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header(props) {
  return (
    <div className="header_container container">
      <Link to="/" className="header_left">
        <img src="/logo.png" alt="logo" className="logo"></img>
      </Link>
      <div className="header_right flex space-x-8">
        <Link to="/" className="home_btn hover:underline hover:text-[#7342d6]">
          Home
        </Link>
        <Link
          to="/books"
          className="books_btn hover:underline hover:text-[#7342d6]"
        >
          Books
        </Link>
        <Link to="/cart">
          <img src="/assets/cart.png" alt="cart_icon" className="cart_icn"></img>
        </Link>
        {props.cartLength !== 0 && props.cartLength !== null ? (
          <div className="cart_item_number">{props.cartLength}</div>
        ) : (
          null
        )}
      </div>
    </div>
  );
}

export default Header;
