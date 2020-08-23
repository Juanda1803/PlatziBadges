import React from "react";

import "../styles/PageError.css";

const PageError = (props) => {
  return <div className="PageError">X{props.error.message}X</div>;
};
export default PageError;
