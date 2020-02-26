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
          <h3 key={laptop.prodID}> Manufacturer: {laptop.brandname}, cost: €{laptop.price} , condition: {laptop.condition}, storage: {laptop.memory}
          , resolution: {laptop.screensize}, RAM: {laptop.ram}GB</h3>
        ))}

        <br/>
        <Helmet>
          <style>{'body { background-color: #DAD9D8; }'}</style>        
        </Helmet>
      
    </div>
  ); 
}

export default Market;