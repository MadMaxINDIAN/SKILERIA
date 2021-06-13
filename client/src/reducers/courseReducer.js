import { LATEST_COURSES } from "../actions/type";

const initialState = {
    latestCourses: [],
}

export default function authReducer (state = initialState,action){
    switch (action.type){
        case LATEST_COURSES: {
            return {...state, latestCourses: action.payload.courses}
        }
        default:
            return state;
    }
}