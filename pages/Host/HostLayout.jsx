import React from "react";
import { NavLink, Outlet } from "react-router-dom";

export default function HostLayout() {
    return (
        <div className="host-body">
            <div className="host-nav">
                <NavLink 
                    className={({ isActive }) => isActive ? "active-route" : ""} 
                    end
                    to='.'>
                    Dashboard
                </NavLink>
                <NavLink 
                    className={({ isActive }) => isActive ? "active-route" : ""} 
                    to='income'>
                    Income
                </NavLink>
                <NavLink
                    className={({ isActive }) => isActive ? "active-route" : ""}
                    to='vans'>
                    Vans
                </NavLink>
                <NavLink 
                    className={({ isActive }) => isActive ? "active-route" : ""} 
                    to='reviews'>
                    Reviews
                </NavLink>
            </div>
            <Outlet />
        </div>
    )
}