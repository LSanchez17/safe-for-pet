import React from 'react';
import { Nav } from 'react-bootstrap';
import {link, NavLink} from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className='bg-light shadow'>
            <ul className='nav left nav-pills nav-fill'>
                <NavLink className='rounded navbar-brand' to='/'>Can my pet eat that?</NavLink>
                <NavLink className='rounded navbar-brand' to='/infographics'>Informational Data</NavLink>
            </ul>
        </nav>
    )
};

export default NavBar;