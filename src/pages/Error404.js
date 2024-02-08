import React from "react";
import "./Error404.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Error404() {
  return (
    <div className="error404_container">
      <div className="error404_goback">
        <FontAwesomeIcon
          icon="fa-solid fa-circle-arrow-left"
          onClick={() => window.history.back()}
        />
      </div>
      Error 404 | Page not found
    </div>
  );
}

export default Error404;
