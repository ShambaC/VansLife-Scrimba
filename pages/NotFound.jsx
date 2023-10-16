import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
    return (
        <div className="page-404">
            <h1>Sorry, the page you were looking for was not found</h1>
            <Link to='/'>Return to home</Link>
        </div>
    )
}