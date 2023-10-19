import { SignInWithGoogle, linkEmailToUser, loginWithEmailPassword, registerUserWithEmailPassword, registerUserWithEmailPasswordV, waitForEmailVerification } from "../../firebase/Provider"
import { checkingCredentials, login, logout } from "./AuthSlice"

export const checkingAuthentication = () => {
    return async (dispatch) => {
        dispatch(checkingCredentials())

    }
}

export const startGoogleSignIn = () => {
    return async (dispatch) => {
        dispatch(checkingCredentials())
        const result = await SignInWithGoogle()

        if(!result.ok) {return dispatch(logout(result.errorMessage))}

        dispatch(login(result))
    }
}

export const startCreatingUserWithEmailPassword = ({email, password, displayName}) => {
    return async (dispatch) => {
        dispatch(checkingCredentials());
        const {ok, uid, photoURL, errorMessage} = await registerUserWithEmailPasswordV({email, password, displayName});
        console.log({ok, uid, photoURL, errorMessage})
        if(ok) {
            try {
                linkEmailToUser(email)
    .then((user) => {
      console.log("Vinculación exitosa. Usuario vinculado:", user);
    })
    .catch((error) => {
      console.error("Error de vinculación:", error);
    });
                dispatch(login({uid, displayName, email, photoURL}))
            
            } catch (error) {
                dispatch(logout({ errorMessage: "Error en la verificación del correo electrónico" }));
              }
        }else {
            console.log('error')
           return dispatch(logout({errorMessage}));
           
        }
        
    }
}
  


export const startLoginWithEmailPassword = ({email, password}) => {
    return async (dispatch) => {
       dispatch(checkingCredentials());
       const {ok,errorMessage, uid, displayName, photoURL} = await loginWithEmailPassword({email, password})
       if(!ok) return dispatch(logout({errorMessage}))
       dispatch((login({uid, email, displayName, photoURL})))
    }
}

export const startLogout = () => {
    return async (dispatch) => {
        dispatch(logout())
     }
}