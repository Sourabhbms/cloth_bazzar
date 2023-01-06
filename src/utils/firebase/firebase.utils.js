import { initializeApp} from 'firebase/app';
import { getAuth,signInWithRedirect,signInWithPopup,GoogleAuthProvider } from 'firebase/auth';
import {
  getFirestore,
  doc,
  getDoc,
  setDoc
} from 'firebase/firestore';


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB8_R_KLzinhJ1kU---NcRFOKFvUNhxr-U",
    authDomain: "cloth-bazzar-db.firebaseapp.com",
    projectId: "cloth-bazzar-db",
    storageBucket: "cloth-bazzar-db.appspot.com",
    messagingSenderId: "297144618033",
    appId: "1:297144618033:web:cba5fa1996f16b4e959910"
  };
  
  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig);

  const googleProvider = new GoogleAuthProvider();

  googleProvider.setCustomParameters({
    prompt: "select_account"
  });

  export const auth=getAuth();

  export const signInWithGooglePopup=()=>signInWithPopup(auth, googleProvider);

  export const signInWithGoogleRedirect=()=> signInWithRedirect(auth, googleProvider);

  export const db = getFirestore();

  export const createUserDocumentFromAuth = async(userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid);

    console.log(userDocRef);

    const userSnapshot = await getDoc(userDocRef);

    console.log(userSnapshot);

    console.log(userSnapshot.exists());

    if (!userSnapshot.exists()) {
      const {displayName, email} = userAuth;
      const createdAt = new Date();

      try {
        await setDoc(userDocRef, {
          displayName,
          email,
          createdAt
        });
      }
      catch (error){
        console.log('error creating the user', error.message);
      }
    }

    return userDocRef;

  }