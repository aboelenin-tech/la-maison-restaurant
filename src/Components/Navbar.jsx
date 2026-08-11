import React from "react";
import { NavLink } from "react-router-dom";



function Navbar() {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <div className="container-fluid">

                <NavLink
                    className="navbar-brand fw-bold fs-2 fst-italic"
                    to="/"
                >
                    La Maison
                </NavLink>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div
                    className="collapse navbar-collapse justify-content-end px-5"
                    id="navbarNav"
                >
                    <ul className="navbar-nav">

                        <li className="nav-item">
                            <NavLink
                                className="nav-link fw-semibold fs-5 px-5"
                                to="/"
                            >
                                Home
                            </NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink
                                className="nav-link fw-semibold fs-5 px-4"
                                to="/menu"
                            >
                                Menu
                            </NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink
                                className="nav-link fw-semibold fs-5 px-5"
                                to="/about"
                            >
                                About
                            </NavLink>
                        </li>

                        <li className="nav-item fw-semibold">
                            <NavLink
                                className="nav-link bg-warning text-dark px-3 rounded fs-5"
                                to="/cart"
                            >
                                Cart
                            </NavLink>
                        </li>

                    </ul>
                </div>

            </div>
        </nav>
    );
}

export default Navbar;