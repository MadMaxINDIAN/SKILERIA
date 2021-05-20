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
    first_name: {
        type: String,
    },
    family_name: {
        type: String
    }
});

module.exports = User = mongoose.model("User",UserSchema);