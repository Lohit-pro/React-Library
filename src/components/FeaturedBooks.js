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
        Featured <span className="text-[#7342d6]">Books</span>
      </div>
      <div className="featuredbooks_books">
        {Books.filter((book) => book.rating === 5)
          .slice(0, 4)
          .map((book) => (
            <div key={book.id} className="featuredbooks_book">
              <img src={book.url} alt="book_img" />
              <div>{book.title}</div>
              <div>
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
              {
                book.salePrice === null ? (
                <div>${book.originalPrice}</div>
                ) : (
                   <div><span className="line-through text-gray-400">${book.originalPrice}</span> ${book.salePrice}</div>
                )
              }
            </div>
          ))}
      </div>
    </div>
  );
}

export default FeaturedBooks;
