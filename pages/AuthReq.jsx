import React from "react";
import { Navigate, Outlet } from "react-router-dom";

export default function AuthReq() {
    let isAuth = localStorage.getItem("loggedin")

    if(!isAuth) {
        return <Navigate to='/login' state={{message: "You must log in first"}} />
    }
    else {
        return <Outlet />
    }
}