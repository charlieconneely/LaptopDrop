import React from 'react';
import {NavLink} from 'react-router-dom';
import '../../App.css';

const SingedOutLinks = () => {
    return (
        <ul className="right">
            <li><NavLink to='/registration'>Register</NavLink></li>
            <li><NavLink to='/login'>Login</NavLink></li>
        </ul>   
    )
}

export default SingedOutLinks;

