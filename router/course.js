const express = require("express");
const LogURL = require("../LogURL");
const passport = require('passport');
const jwt = require('jsonwebtoken');
require('./../authenticate/user-passport')(passport)
var sha1 = require("sha1");
const { JWT_CLIENT_SECRET_KEY, GOOGLE_CLIENT_ID } = require('./../config');
const router = express.Router();
const Course = require('./../models/Course');
const CourseTopic = require('./../models/CourseTopic');
const CourseContent = require('./../models/CourseContent');

// @route   POST /course/latest
// @desc    Get top 20 course
// @type    Public
router.get("/latest",(req, res) => {
    Course.find({}, null, {sort: {name: 1}})
    .populate({path: 'courseTopic', populate: {path: 'courseContent'}})
    .limit(20)
    .then(result => {
        return res.status(200).json({
            courses: result
        })
    })
    .catch(err => {
        return res.status(500).json({
            status: false,
            server: err.message || 'Some Error Occured. Please try again later.'
        })
    })
})

module.exports = router;