import React from "react";
import { Books } from "../data/Data";
import "./DiscountedBooks.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

function DiscountedBooks() {
  const generateStars = (rating) => {
    const roundedRating = Math.round(rating);
    return Array.from({ length: 5 }, (_, index) => index < roundedRating);
  };

  return (
    <div className="discountedbooks_container container">
      <div className="discountedbooks_text">
        Discounted <span className="text-[#7342d6]">Books</span>
      </div>
      <div className="discountedbooks_books">
        {Books.map((book) => (
          book.salePrice === null ? null : (
            <Link to={`/books/${book.id}`} key={book.id} className="discountedbooks_book">
              <img className="discounted_books_images" src={`/` + book.url} alt="book_img" />
              <div className="discountedbooks_name">{book.title}</div>
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
              {
                book.salePrice === null ? (
                <div>${book.originalPrice}</div>
                ) : (
                   <div><span className="line-through text-gray-400">${book.originalPrice}</span> ${book.salePrice}</div>
                )
              }
            </Link>
          )
        ))}
      </div>
    </div>
  );
}

export default DiscountedBooks;
