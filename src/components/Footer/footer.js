import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './footer.css';

const pStyle = {
    fontSize: '10px'
};

const Footer = () => {
    return (
        <div className="main-footer">
            <Container>
                <Row>
                    {/* <div className="col-md-3 col-sm-6"> */}
                    <Col className="col-md-3 col-sm-6">
                        <h3>Location</h3>                  
                        <p>GMIT</p>
                        <p>Dublin Road, Co. Galway</p> 
                        <p>H91 DCH9, Ireland</p>
                        <p>www.gmit.ie</p>                        
                    </Col>
                    <Col className="col-md-3 col-sm-6">
                        <h3>Contact Us</h3>                  
                        <p>charlieconneely.cc@gmail.com</p>
                        <p>(091) 123 4567</p> 
                        <p>customercare@laptopdrop.ie</p>    
                        <p>Facebook - laptopdrop</p>                  
                    </Col>                   
                </Row>
                <Row> 
                    <p style={pStyle}>&copy;{new Date().getFullYear()} LAPTOPDROP</p>
                </Row>
            </Container>    
        </div>
    
    );
};

export default Footer