import React from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

function MenuItems({ items = [] }) {
    return (
        // render menu
        <ul className={"navbar__menu-items"}>
            {items.map((item, index) => (
                <>
                    <li key={index} className={"menu-items__item d-flex"}>
                        <a href={item.to} alt={"link nav item"} role={"button"}>
                            {item.title}
                        </a>
                        {/*render submenu*/}
                        {item.submenus && (
                            <>
                                <ArrowDropDownIcon className="item__arrow" />
                                <div className={"item__submenu-arrow"}></div>
                                <ul className={"item__submenu"}>
                                    {item.submenus?.map((submenu, index) => (
                                        <>
                                            <li
                                                key={index}
                                                className={
                                                    "submenu__submenu-item"
                                                }
                                            >
                                                <a
                                                    alt={"link submenu item"}
                                                    href={submenu.to}
                                                >
                                                    {submenu.title}
                                                </a>
                                            </li>
                                        </>
                                    ))}
                                </ul>
                            </>
                        )}
                    </li>
                </>
            ))}
        </ul>
    );
}
export default MenuItems;
