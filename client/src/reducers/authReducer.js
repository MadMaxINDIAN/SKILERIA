import { LOGIN_USER, LOGOUT_USER } from "../actions/type";

const initialState = {
    isAuthenticated :false,
}

export default function authReducer (state = initialState,action){
    switch (action.type){
        case LOGIN_USER: {
            return {
                ...state,
                isAuthenticated: true,
                user: action.payload.user,
            }
        }
        case LOGOUT_USER: {
            return initialState
        }
        default:
            return state;
    }
}