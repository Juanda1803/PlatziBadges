import React from "react";

import "./styles/NotFound.css";
import error from "../images/Monster-404.png";

const NotFound = () => {
  return (
    <div className="error">
      <img src={error} alt="Error" />
    </div>
  );
};

export default NotFound;
