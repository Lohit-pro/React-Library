import React from "react";
import './Footer.css'
import { Link } from "react-router-dom";

function Footer() {
    return (
        <div className="footer_container container">
            <img src="/logo-white.png" alt="logo" className="h-14"></img>
            <div className="footer_navs">
                <button><Link to="/">Home</Link></button>
                <button className="cursor-not-allowed">About</button>
                <button><Link to="/books">Books</Link></button>
                <button><Link to="/cart">Cart</Link></button>
            </div>
            <div>Copyright &copy;2024 Library</div>
        </div>
    )
}

export default Footer;
