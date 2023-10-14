import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav>
            <Link to="/" className="title">#Vanlife</Link>
            <div className="nav-links">
                <Link to="/about">About</Link>
                <Link to="/vans">Vans</Link>
            </div>
        </nav>
    )
}