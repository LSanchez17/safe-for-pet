import React from 'react';
import { Nav } from 'react-bootstrap';
import {link, NavLink} from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className='bg-white shadow m-2 p-2 rounded'>
            <ul className='nav bg-white left nav-pills rounded nav-fill'>
                <NavLink className='rounded navbar-brand bg-white shadow' to='/'>Can my pet eat that?</NavLink>
                <NavLink className='rounded navbar-brand bg-white shadow' to='/infographics'>Informational Data</NavLink>
            </ul>
        </nav>
    )
};

export default NavBar;