import React from "react";
import "./BookInfo.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Books } from "../data/Data";
import DiscountedBooks from "../components/DiscountedBooks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong, faStar } from "@fortawesome/free-solid-svg-icons";
import { useParams } from "react-router-dom"; // Import useParams to access URL parameters

function BookInfo() {
  const { id } = useParams(); // Get the book id from URL parameters
  const selectedBook = Books.find((book) => book.id === parseInt(id));

  if (!selectedBook) {
    return <div>Book not found!</div>;
  }

  const generateStars = (rating) => {
    const roundedRating = Math.round(rating);
    return Array.from({ length: 5 }, (_, index) => index < roundedRating);
  };

  return (
    <div>
      <Header />
      <div className="bookinfo_container container">
        <div className="bookinfo_nav">
          <FontAwesomeIcon
            icon={faArrowLeftLong}
            className="h-7 cursor-pointer"
            onClick={() => window.history.back()} // Use window.history.back() to go back to the previous page
          />
          <div className="discountedbooks_text">Book Info</div>
        </div>
        <div className="bookinfo">
          <div className="bookinfo_left">
            <img src={`/` + selectedBook.url} alt="book_img" />
          </div>
          <div className="bookinfo_right">
            <div className="bookinfo_title">{selectedBook.title}</div>
            <div>
              {generateStars(selectedBook.rating).map((isFilled, index) => (
                <FontAwesomeIcon
                  key={index}
                  icon={faStar}
                  style={{
                    color: isFilled ? "#fabf2a" : "lightgray",
                  }}
                />
              ))}
            </div>
            <div>
              {selectedBook.salePrice
                ? "$" + selectedBook.salePrice
                : "$" + selectedBook.originalPrice}
            </div>
            <div className="pt-5">
              <p className="text-[1.5rem]">Summary</p>
              <p className="pt-2 font-light">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam,
                repellendus modi odio porro, consequuntur, asperiores minima
                sint voluptatem at reiciendis ducimus neque provident alias iure
                nihil explicabo nobis id voluptas.
              </p>
              <p className="pt-2 font-light">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam,
                repellendus modi odio porro, consequuntur, asperiores minima
                sint voluptatem at reiciendis ducimus neque provident alias iure
                nihil explicabo nobis id voluptas.
              </p>
            </div>
            <button className="addtocart_button">Add to cart</button>
          </div>
        </div>
      </div>
      <DiscountedBooks />
      <Footer />
    </div>
  );
}

export default BookInfo;
