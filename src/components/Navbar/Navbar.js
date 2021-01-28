import React from "react";
import "./index.css"


function Navbar() {
    return (
        <div>
            <nav className="navbar">
                <div className="col-md-8 col-sm-12 col-lg-8">
                    <a className="navbar-brand name-logo" href="./index.html">teresa maldonado</a>
                </div>
                <div className="col-md-8 col-sm-12 col-lg-4">
                <ul className="navbar-nav" id="btn">
                    <li className="nav-item">
            {/* <!-- Button trigger about modal --> */}
                        <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#aboutModal">about</button>
                        <span className="sr-only">(current)</span>
                    </li>
                    <li className="nav-item">
            {/* <!-- Button trigger contact modal --> */}
                        <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#contactModal">contact</button>
                        <span className="sr-only">(current)</span>
                    </li>
                </ul>
                </div>
            </nav>
        </div>
    )
};

export default Navbar;