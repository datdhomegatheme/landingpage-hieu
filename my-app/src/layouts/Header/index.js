import React from "react";
import Images from "../../assets/Images";
import MenuItems from "./MenuItems";
import MiniMenuItems from "./MiniMenuItems";
import MenuIcon from "@mui/icons-material/Menu";
import { headerItems } from "../../component/DataItems";

function Header() {
    const showMenuItems = () => {
        const element = document.getElementById("navbar-collapse");
        element.classList.toggle("navbar-collapse");
    };
    return (
        <>
            <nav
                className="navbar
            "
            >
                <div
                    id="navbar__container"
                    className="d-flex navbar__container
            "
                >
                    <a href={"/#"}>
                        <img
                            src={Images.logo}
                            className={"logo "}
                            alt={"logo"}
                        />
                    </a>
                    <MenuItems items={headerItems} />

                    <button
                        id={"navbar__toggle"}
                        onClick={showMenuItems}
                        className="navbar__toggle d-flex"
                        type="button"
                    >
                        <MenuIcon className="toggle__icon" />
                    </button>
                </div>
                {/*logo*/}
                <MiniMenuItems items={headerItems} />
            </nav>
        </>
    );
}

export default Header;
