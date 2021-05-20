const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const CourseSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    courseIMG: {
        type: String,
        required
    },
    // REVIEWS
    // RATINGS
    // Featured Review
    isBestSeller: {
        type: Boolean,
        require: true,
        default: false
    },
    studentsEnrolled: {
        type: Number
    },
    language: {
        type: String,
        required: true
    },
    author: {
        type: Schema.Types.ObjectId,
        ref: 'Author'
    },
    preRequisites: [{
        type: String,
    }],
    requirements: [{
        type: String
    }],
    detailDescription: {
        type: String
    },
    courseTopic: [{
        type: Schema.Types.ObjectId, ref: 'CourseTopic'
    }]
})

module.exports = Course = mongoose.model("Course", CourseSchema);