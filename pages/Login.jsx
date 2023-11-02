import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function Login() {
    const [loginFormData, setLoginFormData] = useState({email: "", password: ""})
    const location = useLocation()
    const navigate = useNavigate()

    async function loginUser(creds) {
        const res = await fetch("/api/login",
            {
                method: "post",
                body: JSON.stringify(creds)
            })
        const data = await res.json()

        if(!res.ok) {
            throw {
                message: data.message,
                statusText: res.statusText,
                status: res.status
            }
        }

        return data
    }

    function handleSubmit(e) {
        e.preventDefault()
        console.log(loginFormData)
        try {
            loginUser(loginFormData)
                .then(res => {
                    localStorage.setItem("loggedin", true)
                    navigate('/host', { replace: true })
                })
        }
        catch(err) {
            console.log(err.message)
        }
    }

    function handleChange(e) {
        const {name, value} = e.target
        setLoginFormData(prevData => ({
            ...prevData,
            [name]: value
        }))
    }

    return (
        <div className="login-body">
            {
                location.state?.message &&
                <h3 style={{color: "red"}}>{location.state.message}</h3>
            }
            <h1>Sign in to your account</h1>
            <form onSubmit={handleSubmit} className="login-form">
                <input
                    name="email"
                    onChange={handleChange}
                    type="email"
                    placeholder="Email address"
                    value={loginFormData.email}
                    required
                />
                <input
                    name="password"
                    onChange={handleChange}
                    type="password"
                    placeholder="Password"
                    value={loginFormData.password}
                />
                <button>Log in</button>
            </form>
            <p>Don't have an account? <Link style={{color: "#FF8C38"}}>Create one now</Link></p>
        </div>
    )
}