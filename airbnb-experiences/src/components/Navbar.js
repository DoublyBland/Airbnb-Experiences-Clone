import React from "react"
import airbnb from "../assets/airbnb-logo.png"

export default function Navbar() {
    return(
        <nav className="navbar">
            <img src={airbnb}></img>
        </nav>
    )
}