import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <NavLink
                            to="/"
                            exact
                            activeStyle={{
                                fontWeight: 'bold',
                                color: 'red',
                            }}
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            exact
                            to="/menu"
                            activeStyle={{
                                fontWeight: 'bold',
                                color: 'red',
                            }}
                        >
                            Menu
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            exact
                            to="/about"
                            activeStyle={{
                                fontWeight: 'bold',
                                color: 'red',
                            }}
                        >
                            About
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            exact
                            to="/contact"
                            activeStyle={{
                                fontWeight: 'bold',
                                color: 'red',
                            }}
                        >
                            Contact
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
}
