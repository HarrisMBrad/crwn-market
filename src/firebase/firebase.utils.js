import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
      apiKey: "AIzaSyA3fnIoXMMoFPlej7FSzicigdzrexzXdTc",
      authDomain: "crwn-mrkt-db.firebaseapp.com",
      databaseURL: "https://crwn-mrkt-db.firebaseio.com",
      projectId: "crwn-mrkt-db",
      storageBucket: "crwn-mrkt-db.appspot.com",
      messagingSenderId: "487661895036",
      appId: "1:487661895036:web:1b190d5aa9557b3bbcf8f9",
      measurementId: "G-5QZWDLJLW3"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
      if (!userAuth) return;

      
      
      const userRef = firestore.doc(`users/${userAuth.uid}`);

      const snapShot = await userRef.get();

      console.log(snapShot);

            if (!snapShot.exists) {
                  const { displayName, email } = userAuth;
                  const createdAt = new Date();

                  try {
                        await userRef.set({
                              displayName, 
                              email,
                              createdAt,
                              ...additionalData
                    })    
                  } catch (error) {
                        console.log('error creating user', error.message);
                  }
            }

            return userRef;
      };

       firebase.initializeApp(config);

      export const auth = firebase.auth();
      export const firestore = firebase.firestore();

      const provider = new firebase.auth.GoogleAuthProvider();
      provider.setCustomParameters({ prompt: 'select_account' });

      export const signInWithGoogle = () => auth.signInWithPopup(provider);

       export default firebase;

