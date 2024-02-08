import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <div className="header_container container">
      <Link to="/" className="header_left">
        <img src="/logo.png" alt="logo" className="h-12"></img>
      </Link>
      <div className="header_right flex space-x-10">
        <Link to="/" className="home_btn hover:underline hover:text-[#7342d6]">
          Home
        </Link>
        <Link to="/books" className="books_btn hover:underline hover:text-[#7342d6]">
          Books
        </Link>
        <Link to="/cart">
          <img src="/assets/cart.png" alt="cart_icon" className="h-7"></img>
        </Link>
      </div>
    </div>
  );
}

export default Header;
