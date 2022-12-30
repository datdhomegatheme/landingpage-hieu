import React from "react";
import Images from "../../assets/Images";
import MenuItems from "./MenuItems";
import MenuIcon from "@mui/icons-material/Menu";

const Items = [
    {
        title: "Home",
        to: "/home",
        submenus: [
            {
                title: "Demo Template 1",
                to: "/demo1",
            },
            {
                title: "Demo Template 2",
                to: "/demo2",
                new: true,
            },
        ],
    },
    {
        title: "About",
        to: "/About",
    },
    {
        title: "Features",
        to: "/features",
    },
    {
        title: "Pricing",
        to: "/pricing",
    },
    {
        title: "Screenshots",
        to: "/screenshots",
    },
    {
        title: "Pages",
        to: "/pages",
        submenus: [
            {
                title: "Login",
                to: "/login",
            },
            {
                title: "Logout",
                to: "/logout",
            },
        ],
    },
    {
        title: "Blog",
        to: "/blog",
        new: true,
        submenus: [
            {
                title: "Grip",
                to: "/grip",
            },
            {
                title: "Sidebar",
                to: "/sidebar",
            },
        ],
    },
    {
        title: "Team",
        to: "/team",
    },
    {
        title: "Contact",
        to: "contact",
    },
];

function Header() {
    return (
        <>
            <nav id="nav" className="navbar d-flex ">
                {/*logo*/}
                <a href={"/#"} alt={"logo"}>
                    <img src={Images.logo} className={"logo "} alt={"logo"} />
                </a>
                <MenuItems items={Items} />
                <button className="navbar__toggler d-flex" type="button">
                    <MenuIcon className="toggler__icon" />
                </button>
            </nav>
        </>
    );
}

export default Header;
