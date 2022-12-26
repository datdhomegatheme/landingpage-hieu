import React from "react";
import { images } from "../../assets/images";
import MenuItems from "./MenuItems/index";

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
            <nav className="navbar d-flex ">
                {/*logo*/}
                <a href={"/#"} alt={"logo"}>
                    <img src={images.logo} className={"logo "} alt={"logo"} />
                </a>
                <MenuItems items={Items} />
            </nav>
        </>
    );
}

export default Header;
