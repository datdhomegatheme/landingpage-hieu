import React from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

function MenuItems({ items = [] }) {
    return (
        // render menu
        <ul className={"navbar__menu-items"}>
            {items.map((item, index) => (
                <div key={index}>
                    <li className={"menu-items__item d-flex"}>
                        <a
                            href={item.to}
                            className="title"
                            alt={"link nav item"}
                            role={"button"}
                        >
                            <div>
                                {item.title}
                                {item.submenus && (
                                    <ArrowDropDownIcon className="item__arrow" />
                                )}
                                {item.new && (
                                    <span className="item__new chip-font">
                                        New
                                    </span>
                                )}
                            </div>
                        </a>
                        {/*render submenu*/}
                        {item.submenus && (
                            <div>
                                <div className="item__submenu-group">
                                    <div
                                        className={
                                            "item__submenu-arrow dropdown-element"
                                        }
                                    ></div>
                                    <ul
                                        className={
                                            "item__submenu dropdown-element"
                                        }
                                    >
                                        {item.submenus?.map(
                                            (submenu, index) => (
                                                <div key={index}>
                                                    <li
                                                        className={
                                                            "submenu__submenu-item"
                                                        }
                                                    >
                                                        <a
                                                            alt={
                                                                "link submenu item"
                                                            }
                                                            href={submenu.to}
                                                            className={
                                                                "sub-title"
                                                            }
                                                        >
                                                            {submenu.title}
                                                        </a>
                                                        {submenu.new && (
                                                            <span className="submenu-item__new chip-font">
                                                                New
                                                            </span>
                                                        )}
                                                    </li>
                                                </div>
                                            )
                                        )}
                                    </ul>
                                </div>
                            </div>
                        )}
                    </li>
                </div>
            ))}
        </ul>
    );
}
export default MenuItems;
