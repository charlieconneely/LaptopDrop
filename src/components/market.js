import React from 'react';
import { Helmet } from 'react-helmet';
import '../App.css';
import firebase from '../firebase';

function Market () {

  const [laptops, setLaptops] = React.useState([]);
  //const [newLaptopName, setNewLaptopName] = React.useState();

  React.useEffect(() => {
    const fetchData = async () => {
      const db = firebase.firestore();
      const data = await db.collection("Laptops").get();
      setLaptops(data.docs.map(doc => doc.data()))
    }
    fetchData()
  }, [])

  return (
    
    <div className="App">
      
        {laptops.map(laptop => (
          <h3 key={laptop.prodID}>{laptop.brandname}, {laptop.price} euros, {laptop.condition}, {laptop.memory}
          , {laptop.screensize}, {laptop.ram} GB RAM</h3>
        ))}

        <br/>
      
    </div>
  ); 
}

export default Market;