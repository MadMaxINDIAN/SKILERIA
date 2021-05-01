const express = require('express')
const cors = require('cors')
const config = require('./config')
const mongoose = require('mongoose')
const app = express()
const passport = require('passport')
const cookieSession = require('cookie-session');

// App setup
app.use(cookieSession({
    maxAge: 30*24*60*60*1000,
    keys: [config.COOKIE_SESSION_KEY]
}))
app.use(cors())
app.use(passport.initialize())
app.use(passport.session())

// Connecting mongoose
mongoose.connect(config.MONGODB_URI + config.DATABASE_NAME,{ useNewUrlParser: true,useUnifiedTopology: true },() => console.log("MongoDB connected"))
mongoose.set('useFindAndModify', false);

// Routers
const auth = require('./router/auth');

// Initialising router
app.use("/auth/",auth);

// App listening on PORT
app.listen(config.SERVER_PORT,() => {
    console.log("Server running on port 5000");
})