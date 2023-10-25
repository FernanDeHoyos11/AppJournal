import { GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, updateProfile } from "firebase/auth";
import { FirebaseAuth } from "./config";
import { getAuth, linkWithCredential, EmailAuthProvider } from "firebase/auth";


const GoogleProvider = new GoogleAuthProvider();

export const SignInWithGoogle = async()  => {

    try {

        const result = await signInWithPopup(FirebaseAuth, GoogleProvider);

        const {displayName, email, photoURL, uid} = result.user

        return {
            ok: true,
            displayName,
            email, 
            photoURL,
            uid
        }

    } catch(error){
        const errorCode = error.errorCode
        const errorMessage = error.message
        return{
            ok: false,
            errorCode,
            errorMessage
        }
    } 
}

export const registerUserWithEmailPassword = async ({email, password, displayName}) => {
    try{
        const resp = await createUserWithEmailAndPassword(FirebaseAuth, email, password);
        const {uid, photoURL} = resp.user;
        
        await updateProfile(FirebaseAuth.currentUser, {displayName})

        return{
            ok: true, 
            uid, photoURL,email, displayName
        }
    }catch(error){
        return {ok: false, errorMessage: error.message}
    }
};

export const loginWithEmailPassword = async ({email, password}) => {
    try{
        const resp = await signInWithEmailAndPassword(FirebaseAuth, email, password);
        const {uid, photoURL, displayName} = resp.user;

        return{
            ok: true,
            uid, photoURL, displayName
        }
    }catch(error){
        return {ok: false, errorMessage: error.message}
    }
};

export const registerUserWithEmailPasswordV = async ({ email, password, displayName }) => {
    try {
      const resp = await createUserWithEmailAndPassword(FirebaseAuth, email, password);
      const { uid, photoURL } = resp.user;
  
      
      await updateProfile(FirebaseAuth.currentUser, { displayName });
      
  
      return {
        ok: true,
        uid,
        photoURL,
        email,
        displayName,
      };
    } catch (error) {
      return { ok: false, errorMessage: error.message };
    }
  };


  
  export const linkEmailToUser = async (email) => {
    try {
      const credential = EmailAuthProvider.credentialWithLink(email, window.location.href);
      const auth = getAuth();
      const usercred = await linkWithCredential(auth.currentUser, credential);
  
      return usercred.user;
    } catch (error) {  
      throw error;
    }
  };
  
  
 /*  linkEmailToUser(emailToLink)
    .then((user) => {
      console.log("Vinculación exitosa. Usuario vinculado:", user);
    })
    .catch((error) => {
      console.error("Error de vinculación:", error);
    }); */
  
  
  
  
  
  