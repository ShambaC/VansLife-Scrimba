import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";

export default function AuthReq() {
    let isAuth = localStorage.getItem("loggedin")
    const location = useLocation()

    if(!isAuth) {
        return (
            <Navigate
                to='/login'
                state={{
                    message: "You must log in first",
                    from: location.pathname
                    }} 
                replace
            />
        )
    }
    else {
        return <Outlet />
    }
}