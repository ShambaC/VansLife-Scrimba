import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
    return (
        <nav>
            <NavLink to="/" className="title">#Vanlife</NavLink>
            <div className="nav-links">
                <NavLink 
                    className={({ isActive }) => isActive ? "active-route" : ""}
                    to="/host">
                    Host
                </NavLink>
                <NavLink 
                    className={({ isActive }) => isActive ? "active-route" : ""}
                    to="/about">
                    About
                </NavLink>
                <NavLink 
                    className={({ isActive }) => isActive ? "active-route" : ""}
                    to="/vans">
                    Vans
                </NavLink>
            </div>
        </nav>
    )
}