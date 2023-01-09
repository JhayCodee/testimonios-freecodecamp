import React from "react";
import "../styles/Navbar.css";

function Navbar(props) {
  return (
    <div className="navbar">
      <img className="logo" src={props.logo} alt="logo de freeCodeCamp" />
    </div>
  );
}

export default Navbar;
