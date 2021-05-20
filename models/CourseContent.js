const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// type: 1 => Youtube Video
// type: 2 => Text Content

// Create Schema
const Content = new Schema({
    title: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    youtubeVideoLink: {
        type: String
    },
    videoTime: {
        type: Number
        // time in seconds
    },
    textContent: {
        type: String,
    },
    readTime: {
        type: Number
        // time in seconds
    }
});

module.exports = CourseContent = mongoose.model("CourseContent",Content);