import React from 'react';
import {NavLink} from 'react-router-dom';
import '../../App.css';
import { connect } from 'react-redux'; 
import { signOut } from '../../store/actions/authActions';
import { sign } from 'crypto';

const SingedInLinks = (props) => {
    return (
        <ul className="right">
            <li ><NavLink to='/postLaptop'>Sell Item</NavLink></li>
            <li><NavLink to='/market'>Market</NavLink></li>
            <li><NavLink to='/market2'>PC Market</NavLink></li>
            <li><a onClick={props.signOut}>Log Out</a></li>
        </ul>   
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch(signOut())
    }
}

export default connect(null, mapDispatchToProps)(SingedInLinks)

