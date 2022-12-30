import React from "react";
import Images from "../../assets/Images";
import MenuItems from "./MenuItems";
import MenuIcon from "@mui/icons-material/Menu";
import { headerItems } from "../../DataItems";

function Header() {
    return (
        <>
            <nav id="nav" className="navbar d-flex ">
                {/*logo*/}
                <a href={"/#"} alt={"logo"}>
                    <img src={Images.logo} className={"logo "} alt={"logo"} />
                </a>
                <MenuItems items={headerItems} />
                <button className="navbar__toggler d-flex" type="button">
                    <MenuIcon className="toggler__icon" />
                </button>
            </nav>
        </>
    );
}

export default Header;
