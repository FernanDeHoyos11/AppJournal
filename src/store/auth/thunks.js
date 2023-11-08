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

        if (!result.ok) { return dispatch(logout(result.errorMessage)) }

        dispatch(login(result))
    }
}

export const startCreatingUserWithEmailPassword = ({email, password, displayName}) => {
    return async (dispatch) => {
        dispatch(checkingCredentials());
        const {ok, uid, photoURL, errorMessage} = await registerUserWithEmailPassword({email, password, displayName});
        
        if(!ok) return dispatch(logout({errorMessage}));

        dispatch(login({uid, displayName, email, photoURL}))
    }
}



export const startLoginWithEmailPassword = ({ email, password }) => {
    return async (dispatch) => {
        dispatch(checkingCredentials());
        const trimmedEmail = email.trim(); 
        const { ok, errorMessage, uid, displayName, photoURL } = await loginWithEmailPassword({ email: trimmedEmail, password });
        console.log({ email: trimmedEmail, password });

        if (!ok) return dispatch(logout({ errorMessage }));
        dispatch(login({ uid, email: trimmedEmail, displayName, photoURL }));
    };
}

export const startLogout = () => {
    return async (dispatch) => {
        dispatch(logout())
    }
}