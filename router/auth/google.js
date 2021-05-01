const express = require("express");
const router = express.Router();
const passport = require('passport')

passport.serializeUser((user, done) => {
    done(null, user.id)
})

passport.deserializeUser((id, done) => {
    User
        .findById(id)
        .then(user => {
            done(null, user)
        })
        .catch(err => {
            console.log(err);
        })
})

require('./../../authenticate/passport_google')(passport)
const LogURL = require('./../../LogURL');
const User = require("../../models/User");
const { Router } = require("express");

router.get('/', passport.authenticate('google-user',{scope: ['profile']}),(req, res) => {
    LogURL(req, 200);
    res.send("/auth/google")
})

router.get('/callback', passport.authenticate('google-user'),(req, res) => {
    LogURL(req, 200)
    res.send("/auth/google")
})

router.get('/current', (req,res) => {
    LogURL(req, 200);
    return res.send(req.user)
})

module.exports = router;