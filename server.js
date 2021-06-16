const express = require('express')
const cors = require('cors')
const config = require('./config')
const bodyParser = require("body-parser");
const mongoose = require('mongoose')
const app = express()
const passport = require('passport')
const cookieSession = require('cookie-session');

// App setup
app.use(cookieSession({
    maxAge: 30*24*60*60*1000,
    keys: [config.COOKIE_SESSION_KEY]
}))
app.use(express.json());
app.use(cors())
app.use(bodyParser.urlencoded({extended : true}))
app.use(express.json());
app.use(passport.initialize())

// Connecting mongoose
mongoose.connect(config.MONGODB_URI + config.DATABASE_NAME,{ useNewUrlParser: true,useUnifiedTopology: true },() => console.log("MongoDB connected"))
mongoose.set('useFindAndModify', false);

// Routers
const auth = require('./router/auth');
const user = require('./router/user');
const course = require('./router/course');

// Initialising router
app.use("/auth/",auth);
app.use("/u/",user);
app.use("/course/",course);

if (process.env.NODE_ENV !== 'DEVELOPMENT'){
    app.use(express.static('client/build'))
    const path  = require('path')
    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })
}

// App listening on PORT
app.listen(config.SERVER_PORT,() => {
    console.log("Server running on port " + config.SERVER_PORT);
})