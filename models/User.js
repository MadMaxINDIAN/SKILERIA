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
    last_name: {
        type: String
    },
    email: {
        type: String
    },
    is_verified: {
        type: String
    },
    image: {
        type: String
    },
    courses: [
        {
            type: Schema.Types.ObjectId,
            ref: "Course"
        }
    ]
});

module.exports = User = mongoose.model("User",UserSchema);