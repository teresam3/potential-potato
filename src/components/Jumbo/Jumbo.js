import React from "react";
import "./index.css";

function Jumbo() {
    return (
        <div className="jumbotron">
            <div className="container-fluid">
                <img src="./images/html-5.svg" alt="logo of html" />
                <img src="./images/java.svg" alt="logo of java" />
                <img src="./images/javascript.svg" alt="logo of javascript" />
                <img src="./images/nodejs.svg" alt="logo of node" />
                <img src="./images/python.svg" alt="logo of python" />
                <img src="./images/react.svg" alt="logo of react" />
            </div>
        </div>
    )
}

export default Jumbo;