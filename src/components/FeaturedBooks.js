import React from "react";
import "./FeaturedBooks.css";
import { books } from "../data/Data.js";

function FeaturedBooks() {
  return (
    <div className="featuredbooks_container container">
      <div className="featuredbooks_text">
        Featured <span className="text-[#7e22ce]">Books</span>
      </div>
      <div className="featuredbooks_books">
        {books
          .filter((book) => book.rating === 5)
          .slice(0, 4)
          .map((book) => (
            console.log(book)
          ))}
      </div>
    </div>
  );
}

export default FeaturedBooks;
