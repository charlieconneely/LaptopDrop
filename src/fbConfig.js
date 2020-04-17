import firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAh5jb_iwU-PrwCaBZu8ZZq8C5IZQLz6H4",
    authDomain: "itpracproject.firebaseapp.com",
    databaseURL: "https://itpracproject.firebaseio.com",
    projectId: "itpracproject",
    storageBucket: "itpracproject.appspot.com",
    messagingSenderId: "715044072048",
    appId: "1:715044072048:web:e9d02dd0252370592a62b5",
    measurementId: "G-CTYWZSJQ8C"
}

firebase.initializeApp(config);
//firebase.firestore().settings({timestampsInSnapshots: true});

export default firebase;