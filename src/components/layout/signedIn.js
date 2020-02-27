import React from 'react';
import {NavLink} from 'react-router-dom';
import '../../App.css';

const SingedInLinks = () => {
    return (
        <ul className="right">
            <li ><NavLink to='/'>Sell Item</NavLink></li>
            <li><NavLink to='/market'>Market</NavLink></li>
            <li><NavLink to='/market2'>PC Market</NavLink></li>
            <li><NavLink to='/'>Log Out</NavLink></li>
        </ul>   
    )
}

export default SingedInLinks;

