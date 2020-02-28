import React from 'react';
import Card from 'react-bootstrap/Card';
import {Link} from 'react-router-dom';

class LaptopItem extends React.Component {

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         BrandName: "",
    //         Price: "",
    //         Condition: "",
    //         Memory: "",
    //         ScreenSize: "",
    //         RAM: ""
    //     };
    // }

   render() {
       return(
           <div>
               <Card style={{textAlign: "center"}}>
                   <Card.Header>{this.props.laptop.brandname}</Card.Header>
                   <Card.Body>
                       <blockquote className="blockquote mb-0">
                           Cost: €{this.props.laptop.price}<br/>
                           Storage: {this.props.laptop.memory} <br/>
                           Resolution: {this.props.laptop.screensize} <br/>
                           RAM: {this.props.laptop.ram} GB <br/>

                            <footer className="blockquote-footer">
                                Condition: {this.props.laptop.condition}
                            </footer>
                       </blockquote>
                   </Card.Body>
                   <Card.Footer>
                     <button className="button">Add to Basket</button>
                   </Card.Footer>
               </Card>
           </div>
       )
   }
}
export default LaptopItem;