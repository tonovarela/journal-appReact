
//import { useDispatch } from "react-redux"
import { types } from "../types/types";
import { googleAuthProvider, firebase } from '../firebase/firebase-config'

export const startLogin = (email, password) => {
    return (dispatch) => {
        setTimeout(() => {
            dispatch(login(123, 'Padre'))
        }, 3500)

    }
}

export const startGoogleLogin = () => {
    return (dispatch) => {
         firebase.auth().signInWithPopup(googleAuthProvider).then(({user}) => {
             console.log(user);
             dispatch(login(user.uid, user.displayName))
         })


    }

}

export const login = (uid, displayName) => ({
    type: types.login,
    payload: { uid, name: displayName }
});


