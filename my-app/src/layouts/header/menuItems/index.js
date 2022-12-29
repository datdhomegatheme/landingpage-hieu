import React from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

function MenuItems({ items = [] }) {
    return (
        // render menu
        <ul className={"navbar__menu-items"}>
            {items.map((item, index) => (
                <>
                    <li key={index} className={"menu-items__item d-flex"}>
                        <a
                            href={item.to}
                            className="title"
                            alt={"link nav item"}
                            role={"button"}
                        >
                            <>
                                {item.title}
                                {item.submenus && (
                                    <ArrowDropDownIcon className="item__arrow" />
                                )}
                                {item.new && (
                                    <span className="item__new chip-font">
                                        New
                                    </span>
                                )}
                            </>
                        </a>
                        {/*render submenu*/}
                        {item.submenus && (
                            <>
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
                                                    className={"sub-title"}
                                                >
                                                    {submenu.title}
                                                </a>
                                                {submenu.new && (
                                                    <span className="submenu-item__new chip-font">
                                                        New
                                                    </span>
                                                )}
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
