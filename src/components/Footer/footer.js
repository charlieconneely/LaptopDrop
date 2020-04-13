import React from 'react';
import './footer.css';

const Footer = () => {
    return (
        <div className="main-footer">
            <div className="container">
                <div className="row">
                    <div className="col-md-3 col-sm-6">
                        <h3>Location</h3>
                        <ul className="list-unstyled">
                            <p>GMIT</p>
                            <p>Dublin Road, Co. Galway</p> 
                            <p>H91 DCH9, Ireland</p>
                            <p>www.gmit.ie</p>
                        </ul>
                    </div>                    
                </div>
                <div className="row">
                    <p className="col-sm">
                        &copy;{new Date().getFullYear()} PC MARKETPLACE
                    </p>
                </div>
            </div>
        </div>
   
    );
};

export default Footer