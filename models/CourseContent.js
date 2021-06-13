const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// type: YOUTUBE_VIDEO => Youtube Video
// type: TEXT_CONTENT => Text Content
// type: BLOG_TYPE_CONTENT => Blog Type Content
// type: IMAGE_GRAPHIC => Images or graphics

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