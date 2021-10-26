import React from 'react';
import './Navbar.scss';
import {Search} from '@material-ui/icons';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="navbarContainer">
            <div className="navbarLeft">
                <NavLink to="/" className="navbarLogo"> FakeSocial </NavLink>
            </div>
            <div className="navbarCenter">
                <div className="searchbar">
                    <Search className="searchIcon"/>
                    <input type="text" placeholder="Search for friends" className="searchInput" />
                    
                </div>
            </div>
            <div className="navbarRight">
            <img className="navbarImage" src="/Assets/person/1.jpeg" alt="" />
                <div className="navbarLinks">

                    <NavLink to="/" className="navbarLink">Home</NavLink>
                    <NavLink to="/profile" className="navbarLink">Timeline</NavLink>
                    <span className="navbarLink">Logout</span>
                </div>
               
            </div>
        </div>
    );
};

export default Navbar;