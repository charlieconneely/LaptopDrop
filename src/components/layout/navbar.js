import React from 'react';
import { Link } from 'react-router-dom';
import SignedInLinks from './signedIn';
import SingedOutLinks from './signedOut';
import {connect} from 'react-redux';

const Navbar = (props) => {
    const {auth} = props;
    // if statement to check if the uid exists
    // if uid exists - display signedinlinks 
    // else - signoutlinks 
    const links = auth.uid ? <SignedInLinks/> : <SingedOutLinks/>
    return (       
         <nav className="nav-wrapper grey darken-3">       
            <div>
                &emsp; <Link to='/' className="brand-logo">LAPTOP-DROP</Link>
                {links}
            </div>            
        </nav>
    )
}

const mapStateToProps = (state) => {
    return {
        // access authentication status 
        auth: state.firebase.auth
    }
}

export default connect(mapStateToProps)(Navbar);