import React from "react";
import { NavLink, Outlet } from "react-router-dom";

export default function HostLayout() {
    return (
        <div className="host-body">
            <div className="host-nav">
                <NavLink 
                    className={({ isActive }) => isActive ? "active-route" : ""} 
                    to='/host'>
                    Dashboard
                </NavLink>
                <NavLink 
                    className={({ isActive }) => isActive ? "active-route" : ""} 
                    to='/host/income'>
                    Income
                </NavLink>
                <NavLink 
                    className={({ isActive }) => isActive ? "active-route" : ""} 
                    to='/host/reviews'>
                    Reviews
                </NavLink>
            </div>
            <Outlet />
        </div>
    )
}