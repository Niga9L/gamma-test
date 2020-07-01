import React from "react";
import {NavLink} from 'react-router-dom'

export const Navbar = () => (
    <nav className='navbar'>
        <ul className="navbar-nav">
            <li className="nav-item">
                <NavLink exact to="/" className='nav-link'>Рабочий стол 1</NavLink>
            </li>
            <li className="nav-item">
                <NavLink to="/2" className='nav-link'>Рабочий стол 2</NavLink>
            </li>
        </ul>
    </nav>
)
