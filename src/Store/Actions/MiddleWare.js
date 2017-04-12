import AllActions from './AllActions'
import { firebaseApp } from '../../Database/firebaseApp'
import { browserHistory } from 'react-router'

export function LoginUser(LogInData) {
    console.log("LoginUser(LogInData)", LogInData)
    return (dispatch) => {
        dispatch(AllActions.userSignIn());
        firebaseApp.auth().signInWithEmailAndPassword(LogInData.email, LogInData.password)
            .then((data) => {
                return firebaseApp.database().ref('/userInfo' + data.uid).once('value', snapshot => {
                    let userData = snapshot.val();
                    console.log("userData", userData);
                    dispatch(AllActions.userSignInSuccess(userData))
                    browserHistory.replace('/home')
                })

            })
            .catch((error) => {
                console.log("login error", error)
                dispatch(AllActions.userSignInFailed(error))
            })
    }
}