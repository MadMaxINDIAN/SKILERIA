const express = require("express");
const router = express.Router();

// Routers
const google = require('./auth/google');

// Initialising Router
router.use("/google/",google)

module.exports = router;