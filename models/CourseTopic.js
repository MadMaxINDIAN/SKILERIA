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
    videoTime: {
        // time in seconds
        type: Number,
        default: 0
    },
    readTime: {
        // time in seconds
        type: Number,
        default: 0
    },
    courseContent: [{
        type: Schema.Types.ObjectId, ref:'CourseContent'
    }]
});

module.exports = CourseTopic = mongoose.model("CourseTopic",Content);