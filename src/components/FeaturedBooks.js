import React from "react";
import "./FeaturedBooks.css";
import { Books } from "../data/Data.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

function FeaturedBooks() {
  // Data.js

  const generateStars = (rating) => {
    const roundedRating = Math.round(rating);
    return Array.from({ length: 5 }, (_, index) => index < roundedRating);
  };

  return (
    <div className="featuredbooks_container container">
      <div className="featuredbooks_text">
        Featured <span className="text-[#7e22ce]">Books</span>
      </div>
      <div className="featuredbooks_books">
        {Books.filter((book) => book.rating === 5)
          .slice(0, 4)
          .map((book) => (
            <div key={book.id}>
              <img src={book.url} alt="book_img" />
              <div>{book.title}</div>
              <div className="star-rating">
                {generateStars(book.rating).map((isFilled, index) => (
                  <FontAwesomeIcon
                    key={index}
                    icon={faStar}
                    style={{
                      color: isFilled ? "#fabf2a" : "lightgray",
                    }}
                  />
                ))}
              </div>
              <div>${book.salePrice}</div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default FeaturedBooks;
