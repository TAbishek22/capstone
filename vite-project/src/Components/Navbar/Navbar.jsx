import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
const Navbar = () => {
    return (
        <>
            <nav
                id="hero_container"
                className="navbar navbar-expand-lg bg-body-tertiary"
            >
                <div className="container-fluid">
                    <Link className="navbar-brand" to={"/"}>
                        <i className="bi bi-house-heart" />
                        Event Management
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div
                        className="collapse navbar-collapse"
                        id="navbarSupportedContent"
                    >
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link
                                    className="nav-link active"
                                    aria-current="page"
                                    to={"/Events"}
                                >
                                    <i className="bi bi-luggage" />
                                    EVENT LISTS
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={"/login"}>
                                    <i className="bi bi-person" />
                                    LOGIN
                                </Link>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            <input
                                className="form-control me-2"
                                type="search"
                                placeholder="Search Destination"
                                aria-label="Search"
                            />
                            <button className=" bttn bttnn">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
