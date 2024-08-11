import React, { Component } from 'react';
import { NavLink } from "react-router-dom"

import "./navbar.css";

class Navbar extends Component {
    render() {

        const activeLink = "nav-list__link nav-list__link--active";
        const normalLink = "nav-list__link";

        return (
            <nav className='nav'>
                <div className='container'>
                    <div className='nav-row'>
                        <NavLink to="/" className="logo">
                            <strong>STAR</strong> WARS
                        </NavLink>

                        <ul className="nav-list">
                            <li className="nav-list__item">
                                <NavLink to="/" className={({ isActive }) => isActive ? activeLink : normalLink}>
                                    Home
                                </NavLink>
                            </li>
                            <li className="nav-list__item">
                                <NavLink to="/Characters" className={({ isActive }) => isActive ? activeLink : normalLink}>
                                    Characters
                                </NavLink>
                            </li>
                            <li className="nav-list__item">
                                <NavLink to="/Error" className="nav-list__link">
                                    Contacts
                                </NavLink>
                            </li>
                        </ul>
                    </div>

                </div>
            </nav>
        );
    }
}

export default Navbar;
