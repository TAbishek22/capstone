// src/components/Auth/Login.js
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./login.css"; // Import the CSS file for styling
import { api_url } from "../../config";

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`${api_url}api/auth/login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email: email, password: password }),
            });

            const data = await response.json();
            if (response.ok) {
                console.log("Login successful:", data);
                localStorage.setItem("username", data.user.email);
                navigate("/CreateEvent");
                location.reload();
            } else {
                console.error("Login failed:", data.message);
            }
        } catch (error) {
            console.error("Error during login:", error);
        }
    };

    // Implement login logic here

    return (
        <div className="login-container">
            <div className="l2">
                <form onSubmit={handleSubmit} className="login-form">
                    <h2 className="login-title">Login</h2>
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="login-input"
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="login-input"
                    />
                    <button type="submit" className="login-button">
                        Login
                    </button>
                    <p className="login-register">
                        New user? <Link to="/register">Register here</Link>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Login;
