import React from "react";
import "./Error404.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";

function Error404() {
  return (
    <div className="error404_container">
      <div className="error404_goback">
        <FontAwesomeIcon
          icon={faArrowLeftLong}
          className="h-7 cursor-pointer"
          onClick={() => window.history.back()} // Use window.history.back() to go back to the previous page
        />
      </div>
      Error 404 | Page not found
    </div>
  );
}

export default Error404;
