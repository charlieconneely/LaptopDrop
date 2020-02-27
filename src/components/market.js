import React from 'react';
import { Helmet } from 'react-helmet';
import '../App.css';
import firebase from '../firebase';
import LaptopItem from './items/laptopItem';

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
    
    <div className="items">
      
        {laptops.map(laptop => (
          <LaptopItem key={laptop.prodID} laptop={laptop}></LaptopItem>
        ))}

        <br/>
        <Helmet>
          <style>{'body { background-color: #DAD9D8; }'}</style>        
        </Helmet> 
      
    </div>
  ); 
}

export default Market;