import React from "react";
import { NavLink } from "react-router-dom";

export default function MessageNav() {
    return (
        <nav className="nav">
            <ul>
                <li>
                    <NavLink to="/" exact activeClassName="active">
                        Home
            </NavLink>
                </li>
                <li>
                    <NavLink to="/new" activeClassName="active">
                        New Message
            </NavLink>
                </li>
            </ul>
        </nav>
    );
}