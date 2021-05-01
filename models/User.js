const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const UserSchema = new Schema({
    type: {
        type: String,
        required: true
    },
    googleID: {
        type: String,
    },
    password: {
        type: String,
    }
});

module.exports = User = mongoose.model("User",UserSchema);