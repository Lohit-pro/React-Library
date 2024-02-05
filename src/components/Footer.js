import React from "react";
import './Footer.css'

function Footer(){
    return(
        <div className="footer_container container">
            <img src="logo-white.png" alt="logo" className="h-14"></img>
            <div className="footer_navs">
                <button>Home</button>
                <button>About</button>
                <button>Books</button>
                <button>Cart</button>
            </div>
            <div>Copyright &copy;2024 Library</div>
        </div>
    )
}

export default Footer;