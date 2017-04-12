import { firebaseApp, ref } from '../../Database/firebaseApp'
import { Constants } from '../Constants'


const INITIAL_STATE = {
    hasError: false,
    errorMessage: {},
    hasLoggedIn: false,
    hasRegistered: false,
    user: {}
}

export var authReducer = (state = INITIAL_STATE, action) => {
    console.log("action in reducer action", action)

    switch (action.type) {

        case Constants.HAS_SIGNED_IN:
            const { email } = action;
            return email

        case Constants.SIGN_IN:
            return Object.assign({}, state, { user: action.signInData })

        case Constants.SIGN_IN_SUCCESS:
            return Object.assign({}, state, { user: action.authUserData })

        case Constants.SIGN_IN_FAILED:
            return Object.assign({}, state, { hasError: true, errorMessage: action.error })

        case Constants.LOG_OUT:
            return Object.assign({}, state, { user: action.data })

        case Constants.LOG_OUT_SUCCESS:
            return Object.assign({}, state, { user: action.data })

        default:
            return state
    }
}