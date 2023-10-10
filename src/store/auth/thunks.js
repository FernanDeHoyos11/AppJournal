import { login, logout } from "./AuthSlice"

export const startLoginWithEmailPassword = () => {
    return async (dispatch) => {
       //dispatch(checkingCredentials());
       const userData = {
        ok: true,
        uid: 135,
        email: 'fernan@gmail.com',
        displayName: 'fernan david',
        photoURL: 'http://photo.png',
        errorMessage: ''
       }
       const {ok,errorMessage, email, uid, displayName, photoURL} = await userData
       if(!ok) return dispatch(logout({errorMessage}))
       dispatch((login({uid, email, displayName, photoURL})))
    }
}

export const startLogout = () => {
    return async (dispatch) => {
        dispatch(logout())
     }
}