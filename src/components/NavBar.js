import React from 'react';
import { Nav } from 'react-bootstrap';
import {NavLink} from 'react-router-dom';

const NavBar = () => {
    return (
        <Nav className='bg-white shadow px-2'>
            <ul className='nav bg-white m-2 px-0 left nav-pills rounded nav-fill'>
                <NavLink className='rounded px-1 navbar-brand bg-white shadow' to='/'>Can my pet eat that?</NavLink>
                <NavLink className='rounded px-1 navbar-brand bg-white shadow' to='/infographics'>Informational Data</NavLink>
            </ul>
        </Nav>
    )
};

export default NavBar;