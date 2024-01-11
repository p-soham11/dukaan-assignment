/** @format */

import React from "react";
import "./style.css";

const Navbar = () => {
    return (
        <aside className="sidebar">
            <ul>
                <li>
                    <a href="#">
                        <div>
                            <img src="" alt="" />
                            <span>Home</span>
                        </div>
                    </a>
                </li>
                <li>
                    <a href="#">About</a>
                </li>
                <li>
                    <a href="#">Services</a>
                </li>
                <li>
                    <a href="#">Contact</a>
                </li>
            </ul>
        </aside>
    );
};

export default Navbar;
