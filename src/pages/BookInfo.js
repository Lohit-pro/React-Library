import React, { useState, useEffect } from "react";
import "./BookInfo.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Books } from "../data/Data";
import DiscountedBooks from "../components/DiscountedBooks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong, faStar } from "@fortawesome/free-solid-svg-icons";
import { Link, useParams } from "react-router-dom";
import Error404 from "./Error404";
import Cart from "./Cart";

function BookInfo() {
  const { id } = useParams();
  const selectedBook = Books.find((book) => book.id === parseInt(id));
  const [cartItems, setCartItems] = useState(() => {
    const savedCartItems = localStorage.getItem("cartItems");
    return savedCartItems ? JSON.parse(savedCartItems) : [];
  });

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  function handelAddToCartClick() {
    setCartItems([...cartItems, selectedBook]);
    console.log("from BI:", cartItems);
  }

  if (!selectedBook) {
    return <Error404 />;
  }

  const generateStars = (rating) => {
    const roundedRating = Math.round(rating);
    return Array.from({ length: 5 }, (_, index) => index < roundedRating);
  };

  const isBookInCart = cartItems.find((item) => item.id === selectedBook.id);

  return (
    <div>
      <Header cartLength={null} />
      <div className="bookinfo_container container">
        <div className="bookinfo_nav">
          <FontAwesomeIcon
            icon={faArrowLeftLong}
            className="fa-arrow_left"
            onClick={() => window.history.back()}
          />
          <div className="bookinfo_text">Book Info</div>
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
              {selectedBook.salePrice ? (
                <>
                  <span className="line-through text-gray-400">
                    {`$` + selectedBook.originalPrice}
                  </span>{" "}
                  {`$` + selectedBook.salePrice}
                </>
              ) : (
                "$" + selectedBook.originalPrice
              )}
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
            <div className="bookinfo_buttons">
              {isBookInCart ? (
                <Link to="/cart" className="addtocart_button">
                  Checkout
                </Link>
              ) : (
                <button
                  className="addtocart_button"
                  onClick={handelAddToCartClick}
                >
                  Add to cart
                </button>
              )}

              <div className="hidden">
                <Cart props={cartItems} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <DiscountedBooks />
      <Footer />
    </div>
  );
}

export default BookInfo;
