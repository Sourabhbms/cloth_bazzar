import { auth,signInWithGooglePopup,createUserDocumentFromAuth,signInWithGoogleRedirect } from "../../utils/firebase/firebase.utils";
import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";


const SignIn = () => {

    useEffect( ()=>{
        async function fetchGoogleRedirect() {
            const response =  await getRedirectResult(auth);
            if(response) {
                const userDocRef = await createUserDocumentFromAuth(response.user);
            }
        }
        
        fetchGoogleRedirect();

    }, []);

    const logGoogleUser=async () => {
        const {user} = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
    }

    return (
        <div>
            <h1>Sign In Page</h1>
            <button onClick={logGoogleUser}>
                Sign In With Google Popup
            </button>

            <button onClick={signInWithGoogleRedirect}>
                Sign In With Google Redirect
            </button>
        </div>
    )
}

export default SignIn;