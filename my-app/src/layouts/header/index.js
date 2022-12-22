import React from "react";
import "../../assets/Styles/header/index.scss";
import { images } from "../../assets/images";
function Index() {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          {/*logo*/}
          <a href={"#"} className="navbar-brand">
            <img src={images.logo} className={"logo-img"} alt={"logo"} />
          </a>
          {/*menu item*/}
          <ul className={"navbar-nav"}>
            <li class={"nav-item"}>
              <a href={"#"} role={"button"} aria-haspopup="true" aria-expanded="false">
                Home
              </a>
              <div className={"submenu-arrow"}></div>
              <ul className={"submenu"}>
                <li className={"submenu-item"}>
                  <a href={"#"}>submmenu 1</a>
                </li>
                <li className={"submenu-item"}>
                  {" "}
                  <a href={"#"}>submmenu 2</a>
                </li>
              </ul>
            </li>
            <div className={"nav-item-arrow"}></div>
            <li className={"nav-item"}>
              <a href={"#"}>About</a>
            </li>
            <li className={"nav-item"}>
              <a href={"#"}>Features</a>
            </li>
            <li className={"nav-item"}>
              <a href={"#"}>Pricing</a>
            </li>
            <li className={"nav-item"}>
              <a href={"#"}>Screenshots</a>
            </li>
            <li className={"nav-item dropdown"}>
              <a href={"#"}>Pages</a>
            </li>
            <li className={"nav-item dropdown"}>
              <a href={"#"}>Blog</a>
            </li>
            <li className={"nav-item dropdown"}>
              <a href={"#"}>Team</a>
            </li>
            <li className={"nav-item dropdown"}>
              <a href={"#"}>Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Index;
