import React from "react";
import { Link } from 'react-router-dom'

function NavbBar() {
    return (<nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <span className="navbar-brand h1">Task Manager</span>
        <ul className="navbar-nav mr-auto">
            <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/list">Tasks</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/taskform">Add tasks</Link>
            </li>
        </ul>
    </nav>)
}

export default NavbBar;