import React from "react";
import "./AllBooks.css";
import { Books } from "../data/Data";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

function AllBooks() {
  const generateStars = (rating) => {
    const roundedRating = Math.round(rating);
    return Array.from({ length: 5 }, (_, index) => index < roundedRating);
  };
  return (
    <div className="allbooks_container container">
      <div className="allbooks_text">
        All <span className="text-[#7342d6]">Books</span>
      </div>
      <div className="allbooks_books">
        {Books.map((book) => (
          <Link to={`/books/${book.id}`} key={book.id} className="allbooks_book">
            <img src={book.url} alt="book_img" />
            <div className="allbooks_name">{book.title}</div>
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
            {book.salePrice === null ? (
              <div>${book.originalPrice}</div>
            ) : (
              <div>
                <span className="line-through text-gray-400">
                  ${book.originalPrice}
                </span>{" "}
                ${book.salePrice}
              </div>
            )}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default AllBooks;
