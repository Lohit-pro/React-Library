import React from "react";
import './Header.css'

function Header(){
    return(
        <div className="header_container container">
            <div className="header_left">
                <img src="logo.png" alt="logo" className="h-14"></img>
            </div>
            <div className="header_right flex space-x-10">
                <button className="home_btn hover:underline hover:text-[#7e22ce]">Home</button>
                <button className="books_btn hover:underline hover:text-[#7e22ce]">Books</button>
                <button><img src="assets/cart.png" alt="cart_icon" className="h-7"></img></button>
            </div>
        </div>
    )
}

export default Header;