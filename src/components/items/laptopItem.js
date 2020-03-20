import React from 'react';
import LaptopCard from './laptopCard';
import Card from 'react-bootstrap/Card';

// NO LONGER IN USE
// THIS CLASS WAS MOVED TO MARKET SO THAT THE ADD BUTTON COULD BE ACCESSED FROM THERE

const LaptopItem = ({laptops}) => {

    return (
        <div>    
            {laptops && laptops.map(laptop => {              
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
            })}
        </div>
    )         
}

export default LaptopItem;