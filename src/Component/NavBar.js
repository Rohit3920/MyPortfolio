import React from 'react'
import { Link } from "react-router-dom"

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary p-0">
            <div id='navbar' className="container text-right">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span id='navBar-icon' className="navbar-toggler-icon"> <i className="fa-solid fa-bars"></i></span>
                </button>
                <div className="collapse navbar-collapse text-center" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Profile</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="#aboutMe">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Iternship & Trainee</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Education</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Certifications</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Projects</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Skills</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Websites</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Contact</Link>
                        </li>

                    </ul>
                </div>

            </div>
        </nav>
    )
}

export default NavBar;
