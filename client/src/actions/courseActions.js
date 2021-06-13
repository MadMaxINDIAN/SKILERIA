import { LATEST_COURSES } from "./type";
import axios from "axios";
import { Modal } from 'bootstrap';

// Latest Courses
export const latestCourses = () => dispatch => {
    const container = document.getElementById("Loader");
    var loader = new Modal(container);
    loader.show();
    axios.get("/course/latest")
    .then(courses => {
        dispatch({
            type: LATEST_COURSES,
            payload: courses.data
        })
        setTimeout(function(){ loader.hide() }, 2000);
    })
    .catch(err => {
        console.log(err);
        loader.hide()
    })
}