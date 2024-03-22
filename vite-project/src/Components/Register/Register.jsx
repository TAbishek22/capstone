// src/components/Auth/Register.js
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./register.css"; // Import the CSS file for styling
import { api_url } from "../../config";

const Register = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!name || !email || !password) {
            alert("Fill in all the details");
        } else {
            try {
                const response = await fetch(`${api_url}api/auth/register`, {
                    method: "POST",
                    headers: {
                        "content-type": "application/json",
                    },
                    body: JSON.stringify({
                        name: name,
                        email: email,
                        password: password,
                    }),
                });
                const data = await response.json();
                console.log(data);
                if (response.ok) {
                    console.log("Registration successful:", data);
                    navigate("/login");
                } else {
                    console.error("Registration failed:", data.message);
                }
            } catch (error) {
                console.error("Error during registration:", error);
            }
        } // Implement registration logic here
    };

    return (
        <div className="register-container">
            <div className="reg">
                <form onSubmit={handleSubmit} className="register-form">
                    <h2 className="register-title">Register</h2>
                    <p className="register-login">
                        Already a member? <Link to="/login">Login</Link>
                    </p>
                    <input
                        type="text"
                        placeholder="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="register-input"
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="register-input"
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="register-input"
                    />
                    <button type="submit" className="register-button">
                        Register
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Register;
