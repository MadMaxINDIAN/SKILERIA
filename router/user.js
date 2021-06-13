const express = require("express");
const LogURL = require("../LogURL");
const passport = require('passport');
const jwt = require('jsonwebtoken');
require('./../authenticate/user-passport')(passport)
var sha1 = require("sha1");
const { JWT_CLIENT_SECRET_KEY, GOOGLE_CLIENT_ID } = require('./../config');
const router = express.Router();
const User = require('./../models/User');
const validateGoogleTokenId = require("./../validation/googleTokenId");
const { OAuth2Client } = require("google-auth-library")
const client = new OAuth2Client(GOOGLE_CLIENT_ID)

passport.serializeUser((user, done) => {
    console.log("Serialize User")
    done(null, user.id)
})

passport.deserializeUser((id, done) => {
    console.log("Deserialize User")
    User
        .findById(id)
        .then(user => {
            done(null, user)
        })
        .catch(err => {
            console.log(err);
        })
})


// @route   POST /api/u/logout
// @desc    Logout User
// @type    Private
router.post("/logout", (req, res) => {
    return res.status(200).json({
        status: true,
        message: "User has been Logged out",
    })
})

// @route   POST /api/u/google
// @desc    Sign Up and Login Google User
// @type    Public
router.post("/google", (req, res) => {
    // VALIDATION
    const { errors, isValid } = validateGoogleTokenId(req.body);
    if (!isValid) {
        LogURL(req, 400);
        return res.status(400).json({
            status: false,
            message: "Data is not received",
            errors: errors
        });
    }

    // Verify Token for GOOGLE Id
    client.verifyIdToken({
        idToken: req.body.tokenId,
        audience: GOOGLE_CLIENT_ID
    }).then(result => {
        const { email, family_name, given_name, picture, email_verified } = result.payload;
        User.findOne({ email })
        .then(user => {
            if (user) {
                if (user.type === "GOOGLE_USER") {
                    const payload = {
                        id : user.id,
                        first_name: user.first_name,
                        last_name: user.last_name,
                        email : user.email,
                        is_verified: user.is_verified,
                        image: user.image
                    }
                    // Sign Token
                    jwt.sign(payload,
                        JWT_CLIENT_SECRET_KEY,
                        {expiresIn : 60*60*24*30},
                        (err, token) => {
                            if (err) throw err;
                            return res.status(200).json({
                                status: true,
                                token: 'Bearer ' + token,
                                user: payload
                            })
                    })
                }
                else {
                    errors.accountType = user.type;
                    errors.message = "User registered with different account type";
                    return res.status(400).json({
                        status: false,
                        message: "User email is registered with different account Type",
                        errors: errors
                    })
                }
            }
            else {
                // Register User and than login
                const user = User({
                    type: "GOOGLE_USER",
                    image: result.payload.picture,
                    first_name: result.payload.given_name,
                    last_name: result.payload.family_name,
                    email: result.payload.email,
                    is_verified: result.payload.email_verified
                });
                const payload = {
                    id : user.id,
                    first_name: user.first_name,
                    last_name: user.last_name,
                    email : user.email,
                    is_verified: user.is_verified,
                    image: user.image
                }
                // Sign Token
                jwt.sign(payload,
                    JWT_CLIENT_SECRET_KEY,
                    {expiresIn : 60*60*24*30},
                    (err, token) => {
                        if (err) throw err;
                        user.save();
                        return res.status(200).json({
                            status: true,
                            token: 'Bearer ' + token,
                            user: payload
                        })
                })
            }
        })
        .catch(err => {
            errors.error = err.message || "Server Error";
            res.status(500).json({
                status: false,
                message: "Google User SignUp/LogIn failed",
                errors: errors
            })
        })
    }).catch(err => {
        errors.error = err.message || "Google Id not verified";
        res.status(500).json({
            status: false,
            message: "Google User SignUp/LogIn failed",
            errors: errors
        })
    })
})

module.exports = router;