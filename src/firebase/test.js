import firebase from 'firebase/app';
import 'firebase/firestore';

const firestore = firebase.firestore();

firestore.collection('users').doc('NBDCIJmEFSFaW0eGdOz1').collection('cartItems').doc('ULybG5I6mGtz7sUVHSUW');
// main methods used to query ... no SQL firebase is just one big JSON object.
firestore.doc('/users/NBDCIJmEFSFaW0eGdOz1/cartItems/ULybG5I6mGtz7sUVHSUW');
// main methods, dito cart items.
firestore.collection('/users/NBDCIJmEFSFaW0eGdOz1/cartItems');