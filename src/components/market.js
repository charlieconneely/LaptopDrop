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

//   componentDidMount() {
//       const rootRef = firebase.database().ref().child('Laptops');
//       const nameRef = rootRef.child('name');
//       speedRef.on('value', snap => {
//           this.setState({
//             name: snap.val()
//           });
//       });
//   }

  return (
    
    <div className="App">
      <ul>
        {laptops.map(laptop => (
          <li key={laptop.brandname}>{laptop.brandname}</li>
        ))}
        {laptops.map(laptop => (
          <li key={laptop.brandname}>{laptop.processor}</li>
        ))}
        &nbsp;
      </ul>
    </div>
  ); 
}

export default Market;