import React, { useState, useEffect } from "react";
import "./Cart.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Cart(props) {
  const [cartItems, setCartItems] = useState(() => {
    const savedCartItems = localStorage.getItem("cartItems");
    return savedCartItems ? JSON.parse(savedCartItems) : [];
  });

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    const targetSection = document.getElementById("Cart".toLowerCase());
    targetSection.scrollIntoView({ behavior: "smooth" });
  }, [cartItems]);

  // Function to handle removal of a book from the cart
  const handleRemoveBook = (id) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCartItems);
  };

  // Function to calculate subtotal based on quantity
  const calculateSubTotal = (id, quantity) => {
    const item = cartItems.find((item) => item.id === id);
    if (item) {
      const price = item.salePrice ? item.salePrice : item.originalPrice;
      const subtotal = price * quantity;
      const tax = 0.05 * subtotal; // 5% tax
      const total = subtotal + tax;
      return {
        subtotal: subtotal.toFixed(1),
        tax: tax.toFixed(1),
        total: total.toFixed(1),
      };
    }
    return {
      subtotal: 0,
      tax: 0,
      total: 0,
    };
  };

  // Function to handle quantity change
  const handleQuantityChange = (id, quantity) => {
    const updatedCartItems = cartItems.map((item) => {
      if (item.id === id) {
        return { ...item, quantity: quantity };
      }
      return item;
    });
    setCartItems(updatedCartItems);
  };

  // Function to handle checkout
  const handleCheckout = () => {
    alert("Haven't got around to doing this :(");
  };

  return (
    <>
      <Header cartLength={cartItems.length} />
      <div className="cart_container" id={"Cart".toLowerCase()}>
        <div className="cart_nav">
          <FontAwesomeIcon
            icon={faArrowLeftLong}
            className="h-7 cursor-pointer"
            onClick={() => window.history.back()}
          />
          <div className="discountedbooks_text">Cart</div>
        </div>
        <div className="cart_bqp">
          <div>Book</div>
          <div>Quantity</div>
          <div>Price</div>
        </div>
        {cartItems && cartItems.length > 0 ? (
          <div className="cart_items_checkout">
            <div className="cart_items">
              {cartItems.map((item) => (
                <div key={item.id} className="cart_item">
                  <div className="cart_book">
                    <img
                      src={item.url}
                      alt="book_image"
                      className="cart_book_img"
                    ></img>
                    <div className="cart_book_details">
                      <div className="cart_book_name">{item.title}</div>
                      <div className="cart_book_amount">
                        ${item.salePrice ? item.salePrice : item.originalPrice}
                      </div>
                      <button
                        className="cart_book_remove text-red-500"
                        onClick={() => handleRemoveBook(item.id)}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                  <div className="cart_qty">
                    <input
                      className="cart_qty_input"
                      type="number"
                      min="1"
                      max="99"
                      defaultValue={item.quantity || 1}
                      onChange={(e) =>
                        handleQuantityChange(item.id, parseInt(e.target.value))
                      }
                    ></input>
                  </div>
                  <div className="cart_price">
                    ${calculateSubTotal(item.id, item.quantity || 1).total}
                  </div>
                </div>
              ))}
            </div>
            <div className="checkout">
              <div className="checkout_content">
                <div className="checkout_details">
                  <div>
                    <div>Subtotal</div>
                    <div>
                      $
                      {cartItems
                        .reduce(
                          (acc, item) =>
                            acc +
                            parseFloat(
                              calculateSubTotal(item.id, item.quantity || 1)
                                .subtotal
                            ),
                          0
                        )
                        .toFixed(1)}
                    </div>
                  </div>
                  <div>
                    <div>Tax</div>
                    <div>
                      $
                      {cartItems
                        .reduce(
                          (acc, item) =>
                            acc +
                            parseFloat(
                              calculateSubTotal(item.id, item.quantity || 1).tax
                            ),
                          0
                        )
                        .toFixed(1)}
                    </div>
                  </div>
                  <div>
                    <div>Total</div>
                    <div>
                      $
                      {cartItems
                        .reduce(
                          (acc, item) =>
                            acc +
                            parseFloat(
                              calculateSubTotal(item.id, item.quantity || 1)
                                .total
                            ),
                          0
                        )
                        .toFixed(1)}
                    </div>
                  </div>
                </div>
                <button onClick={handleCheckout}>Proceed to checkout</button>
              </div>
            </div>
          </div>
        ) : (
          <div className="cart_empty">
            <img
              className="cart_empty_logo"
              src="/assets/empty_cart.svg"
              alt="empty_cart"
            />
            You don't have any books in your cart!
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}

export default Cart;
