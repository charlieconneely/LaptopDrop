import React from 'react';
import Card from 'react-bootstrap/Card';

// NO LONGER IN USE - ALL CODE MOVED TO MARKET.JS ALONG WITH LAPTOPITEM

const LaptopCard = ({laptop}) => {
    return (
        <Card style={{textAlign: "center"}}>
            <Card.Header>{laptop.brandname}</Card.Header>
            <Card.Body>
                <blockquote className="blockquote mb-0">
                    Cost: €{laptop.price}<br/>
                    Storage: {laptop.memory} <br/>
                    Resolution: {laptop.screensize} <br/>
                    RAM: {laptop.ram} GB <br/>
                    Processor: {laptop.processor} <br/>

                    <footer className="blockquote-footer">
                        Condition: {laptop.condition}
                    </footer>
                </blockquote>
            </Card.Body>
            <Card.Footer><button>Add to Basket</button></Card.Footer>
        </Card>
    )
}

export default LaptopCard