import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <a className="logo">
            <img
              width={100}
              src="src/access/img/logo.png"
              className={"logoImg"}
              alt={"logo"}
            />
          </a>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
