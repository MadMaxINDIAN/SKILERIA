const dotenv = require('dotenv')
dotenv.config()

const port = process.env.NODE_ENV === 'DEVELOPMENT' ? 5000 : process.env.PORT

module.exports = {
    MONGODB_URI: process.env.MONGODB_URI,
    DATABASE_NAME: process.env.DATABASE_NAME,
    JWT_USER_LOGIN_SECRET_KEY: process.env.JWT_USER_LOGIN_SECRET_KEY,
    NODE_ENV: process.env.NODE_ENV,
    GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
    GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
    COOKIE_SESSION_KEY: process.env.COOKIE_SESSION_KEY,
    JWT_CLIENT_SECRET_KEY: process.env.JWT_CLIENT_SECRET_KEY,
    SERVER_PORT: port,
}