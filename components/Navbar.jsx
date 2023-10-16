import React from "react";
import { NavLink } from "react-router-dom";
import { MdOutlineAccountCircle } from 'react-icons/md'

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
                <NavLink 
                    to="/login">
                    <MdOutlineAccountCircle />
                </NavLink>
            </div>
        </nav>
    )
}