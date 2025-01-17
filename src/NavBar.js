import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css"
export default function NavBar(){
    return(
        <div>
            <ul>
                <li>
                    <Link to="/content">Home</Link>
                </li> 
                <li>
                    <Link to="/cart">Cart</Link>
                </li> 
                <li>
                    <Link to = "/login">Login</Link>
                </li>
                <li>
                    <Link to = "/admin">Admin</Link>
                </li>
            </ul>
        </div>
    );
}