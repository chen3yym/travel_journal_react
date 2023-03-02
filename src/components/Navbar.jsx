import React from "react";
import EarthLogo from "/src/images/earth-logo.svg";

export default function Navbar() {
    return (
        <nav>
            <img src={EarthLogo} className="earth--logo"/>
            <h3 className="nav--title">My traval jornal</h3>
        </nav>
    )
}

