import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Login() {
    const [loginFormData, setLoginFormData] = useState({email: "", password: ""})

    function handleSubmit(e) {
        e.preventDefault()
        console.log(loginFormData)
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