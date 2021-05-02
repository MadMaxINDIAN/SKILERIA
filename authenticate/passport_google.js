const GoogleStrategy = require('passport-google-oauth20').Strategy;
const { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET } = require('./../config');
const User = require('./../models/User');

module.exports = (passport) => {
    passport.use(
        "google-user",
        new GoogleStrategy({
            clientID: GOOGLE_CLIENT_ID,
            clientSecret: GOOGLE_CLIENT_SECRET,
            callbackURL: "/auth/google/callback"
        },
        function(accessToken, refreshToken, profile, done) {
            console.log(accessToken);
            console.log(refreshToken);
            if (profile) {
                User.findOne({googleID: profile.id})
                .then(user => {
                    if (user) {
                        done(null, user)
                    } else {
                        console.log(profile._json);
                        const newUser = new User({
                            type: 'google',
                            googleID: profile.id
                        })
                        newUser.save()
                        .then(user => {done(null,user); res.json(user)})
                        .catch(err => console.log(err));
                    }
                })
            }
        })
    )
}