import React from 'react';
import { Helmet } from 'react-helmet';
import '../App.css';
import firebase from '../fbConfig';

function Market2 () {

  const [pcs, setPcs] = React.useState([]);
  //const [newPCName, setNewPCName] = React.useState();

  React.useEffect(() => {
    const fetchData = async () => {
      const db = firebase.firestore();
      const data = await db.collection("PCs").get();
      setPcs(data.docs.map(doc => doc.data()))
    }
    fetchData()
  }, [])

  return (
    
    <div className="App">

         {pcs.map(Pcs => (
          <h3 key={Pcs.prodID}> Manufacturer: {Pcs.brandname}, cost: €{Pcs.price} , condition: {Pcs.condition}, storage: {Pcs.memory}
          , resolution: {Pcs.screensize}, RAM: {Pcs.ram}GB</h3>
        ))}
        <br/>
        <Helmet>
          <style>{'body { background-color: #DAD9D8; }'}</style>        
        </Helmet>
      
    </div>
  ); 
}

export default Market2;