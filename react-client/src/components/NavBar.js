import React from "react";
import { NavLink as Link } from 'react-router-dom'

function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light shadow sticky-top">
            <Link className="navbar-brand" to="/"><span className="ribbon-icon"></span></Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item"><Link className="nav-link" to="/home">Home</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="/info">Info</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="/about">About Us</Link></li>
                </ul>
            </div>
        </nav>
    );
}

export default NavBar;