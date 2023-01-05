import { initializeApp} from 'firebase/app';
import { getAuth,signInWithRedirect,signInWithPopup,GoogleAuthProvider } from 'firebase/auth';

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

  const provider = new GoogleAuthProvider();

  provider.setCustomParameters({
    prompt: "select_account"
  });

  export const auth=getAuth();

  export const signInWithGooglePopup=()=>signInWithPopup(auth, provider);