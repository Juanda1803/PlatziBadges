import React from "react";
import Navbar from "./Navbar";

function Layout(props) {
  return (
    //generar div innecesarios
    <React.Fragment>
      <Navbar />
      {props.children}
    </React.Fragment>
  );
}

export default Layout;
