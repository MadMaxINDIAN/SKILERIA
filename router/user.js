const express = require("express");
const LogURL = require("../LogURL");
const passport = require('passport');
require('../authenticate/user-passport')(passport)
const jwt = require('jsonwebtoken');
var sha1 = require("sha1");
const router = express.Router();
const User = require('../models/User');
const Course = require('../models/Course');
const validateGoogleTokenId = require("../validation/googleTokenId");

// @route   POST /u/:userID
// @desc    Return All Course for userID
// @type    Private
router.get("/:userID", passport.authenticate('user-jwt',{session:false}), (req, res) => {
    const errors = {};

    User.findById(req.params.userID)
    .then( user => {
        if (user) {
            return res.status(200).json({
                status: true,
                message: "User Course",
                courses: user.courses
            })
        }
        else {
            return res.status(300).json({
                status: false,
                message: "User not found"
            })
        }
    } )
    .catch(err => {
        errors.error = "Server Error or invalid UserId";
        res.status(500).json({
            status: false,
            message: "User Courses Found error",
            errors: errors
        })
    })
})

// @route   POST /u/:userID/add/c/:courseID
// @desc    Add Course to user Account
// @type    Private
router.post("/:userID/add/c/:courseID", passport.authenticate('user-jwt',{session:false}), (req, res) => {
    const errors = {};

    User.findById(req.params.userID)
    .then( user => {
        if (user) {
            Course.findById(req.params.courseID)
            .then(course => {
                if (course) {
                    for (var i = 0; i < user.courses.length; i++){
                        if ("" + user.courses[i] === req.params.courseID) {
                            return res.status(200).json({
                                status: true,
                                message: "Course Already in user Account",
                                user
                            })
                        }
                    }
                    user.courses.push(course._id);
                    user.save();
                    return res.status(200).json({
                        status: true,
                        message: "Course added to User Account",
                        user
                    })
                }
                else {
                    return res.status(300).json({
                        status: false,
                        message: "Course not found"
                    })                    
                }
            })
            .catch(err => {
                errors.error = "Server Error or Invalid courseID";
                res.status(500).json({
                    status: false,
                    message: "User Courses add ERROR",
                    errors: errors
                })
            })
        }
        else {
            return res.status(300).json({
                status: false,
                message: "User not found"
            })
        }
    } )
    .catch(err => {
        errors.error = "Server Error or invalid UserId";
        res.status(500).json({
            status: false,
            message: "User Courses add ERROR",
            errors: errors
        })
    })
})

// @route   POST /u/:userID/add/c/:courseID
// @desc    Add Course to user Account
// @type    Private
router.post("/:userID/remove/c/:courseID", passport.authenticate('user-jwt',{session:false}), (req, res) => {
    const errors = {};

    User.findById(req.params.userID)
    .then( user => {
        if (user) {
            Course.findById(req.params.courseID)
            .then(course => {
                if (course) {
                    var found = 0;
                    const temp = [];
                    for (var i = 0; i < user.courses.length; i++){
                        if ("" + user.courses[i] === req.params.courseID) {
                            found = 1;
                            continue;
                        } else {
                            temp.push(user.courses[i])
                        }
                    }
                    if (found){
                        user.courses = temp;
                        user.save();
                        return res.status(200).json({
                            status: true,
                            message: "Course removed from User Account",
                            user
                        })
                    } else {
                        return res.status(200).json({
                            status: true,
                            message: "Course not found in User Account",
                            user
                        })
                    }

                }
                else {
                    return res.status(300).json({
                        status: false,
                        message: "Course not found"
                    })                    
                }
            })
            .catch(err => {
                console.log(err);
                errors.error = "Server Error or Invalid courseID";
                res.status(500).json({
                    status: false,
                    message: "User Courses remove ERROR",
                    errors: errors
                })
            })
        }
        else {
            return res.status(300).json({
                status: false,
                message: "User not found"
            })
        }
    } )
    .catch(err => {
        errors.error = "Server Error or Invalid UserId";
        res.status(500).json({
            status: false,
            message: "User Courses remove ERROR",
            errors: errors
        })
    })
})


module.exports = router;