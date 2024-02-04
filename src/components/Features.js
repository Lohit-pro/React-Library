import React from "react";
import "./Features.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Features() {
  return (
    <div className="features_container container">
      <div class="custom-shape-divider-top-1706841769">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            class="shape-fill"
          ></path>
        </svg>
      </div>
      <div class="custom-shape-divider-bottom-1706843637">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            class="shape-fill"
          ></path>
        </svg>
      </div>
      <div className="features_text">
        Why choose <span className="text-[#7e22ce]">Library</span>
      </div>
      <div className="features">
        <div className="features_items">
          <div className="features_item">
            <FontAwesomeIcon
              icon="fa-solid fa-bolt"
              style={{
                color: "#7e22ce",
                height: "2.25rem",
                border: "solid 2px #7e22ce81",
                borderRadius: "0.25rem",
                padding: "1.75rem",
              }}
            />
            <h1 className="text-2xl mt-5 mb-3">Easy and Quick</h1>
            <h2 className="text-[1rem] font-extralight">
              Get access to the book you purchased online instantly
            </h2>
          </div>
          <div className="features_item">
            <FontAwesomeIcon
              icon="fa-solid fa-book-open"
              style={{
                color: "#7e22ce",
                height: "2.25rem",
                border: "solid 2px #7e22ce81",
                borderRadius: "0.25rem",
                padding: "1.75rem",
              }}
            />
            <h1 className="text-2xl mt-5 mb-3">10,000+ Books</h1>
            <h2 className="text-[1rem] font-extralight">
              Library has books in all your favorite categories
            </h2>
          </div>
          <div className="features_item">
            <FontAwesomeIcon
              icon="fa-solid fa-tags"
              style={{
                color: "#7e22ce",
                height: "2.25rem",
                border: "solid 2px #7e22ce81",
                borderRadius: "0.25rem",
                padding: "1.75rem",
              }}
            />
            <h1 className="text-2xl mt-5 mb-3">Affordable</h1>
            <h2 className="text-[1rem] font-extralight">
              Get your hands on populare books for as little as $10
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
