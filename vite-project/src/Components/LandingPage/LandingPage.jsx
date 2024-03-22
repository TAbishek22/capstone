import React, { useEffect } from "react";
import "./landingpage.css";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
    useEffect(() => {
        let hero_container = document.getElementById("hero_container");
        hero_container.style.display = "block";
    });
    const navigate = useNavigate();
    const redirect = () => {
        navigate("/register");
    };
    return (
        <>
            <div className="landing_container">
                <div className="landing_page">
                    <h1>Welcome to Event Management</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Aliquid sequi similique sit?
                    </p>
                    <button
                        className="bttn"
                        onClick={() => {
                            redirect();
                        }}
                    >
                        Register
                    </button>
                </div>
            </div>
        </>
    );
};

export default LandingPage;
