import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import SignedInLinks from './signedIn';
import SingedOutLinks from './signedOut';

const Navbar = () => {
    return (       
         <nav className="nav-wrapper grey darken-3">       
            <div>
                <Link to='/' className="brand-logo">PC MARKETPLACE</Link>

                {/* ref - https://www.youtube.com/watch?v=jKqnfzdPqJI
                still need to use auth to determine if user is signed it  */}
                <SignedInLinks/>
                <SingedOutLinks/> 
            </div>            
        </nav>
    )
}

export default Navbar;