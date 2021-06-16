import { GET_ERRORS, LOGIN_USER, LOGOUT_USER } from './type';
import axios from "axios";
import setAuthToken from "./../utils/setAuthToken";

// Google User
export const google = (tokenId, modal) => dispatch => {
    modal.show()
    axios.post("/auth/google", {tokenId: tokenId}).then(res => {
        setAuthToken(res.data.token);
        
        // Set Token to localstorage
        localStorage.setItem("userJwtToken",res.data.token);
        
        setTimeout(function(){ modal.hide() }, 500);
        dispatch({
            type: LOGIN_USER,
            payload: res.data
        })
    })
    .catch(err => {
        dispatch({
            type : GET_ERRORS,
            payload : err.response.data.errors
        })
        setTimeout(function(){ modal.hide() }, 1000);
    })
}

// Logout User
export const logoutUser = (modal, history) => dispatch =>  {
    modal.show();
    axios.post('/api/u/logout', {})
    .then(res => {
        setTimeout(function(){ modal.hide() }, 800);
        dispatch({
            type: LOGOUT_USER,
            payload: res.data
        })
        history.push('/')
    })
    
}