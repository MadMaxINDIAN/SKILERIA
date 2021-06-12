import { GET_ERRORS } from "./../actions/type";

const initialState ={}

export default function errorReducer (state = initialState,action){
    switch (action.type){
        case GET_ERRORS : {
            if (typeof action.payload === "string") {
                return {unauthorized : "Unauthorized access denied"}
            }
            if (typeof action.payload === "undefined") {
                return {error : "Some Error Occured"}
            }
            return action.payload;
    }
        default:
            return state;
    }
}