import React from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

function MiniMenuItems({ items = [] }) {
    return (
        // render menu
        <div id={"navbar-collapse"} className={"navbar-collapse-hide"}>
            <ul>
                {items.map((item, index) => (
                    <div key={index}>
                        <li>
                            <a href={item.to}>
                                {" "}
                                {item.title}
                                {item.submenus && (
                                    <ArrowDropDownIcon className="navbar-collapse__items-arrow" />
                                )}
                                {item.new && (
                                    <span className="chip-font">New</span>
                                )}
                            </a>
                            {/*render submenu*/}
                            {item.submenus && (
                                <div>
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
                            )}
                        </li>
                    </div>
                ))}
            </ul>
        </div>
    );
}
export default MiniMenuItems;
