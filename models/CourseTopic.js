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
        type: Number
    },
    readTime: {
        type: Number
    },
    courseContent: [{
        type: Schema.Types.ObjectId, ref:'CourseContent'
    }]
});

module.exports = CourseTopic = mongoose.model("CourseTopic",Content);