import React from "react";
import './ExploreMore.css'
import { Link } from "react-router-dom";

function ExploreMore(){
    return (
        <div className="exploremore_container container">
            <div className="exploremore_text">
                Explore More <span className="text-[#7342d6]">Books</span>
            </div>
            <Link to="/books" className="exploremore_button">Explore more!</Link>
        </div>
    )
}

export default ExploreMore;