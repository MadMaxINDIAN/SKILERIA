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
        fieldname: {
            type: String,
            required: true
        },
        originalname: {
            type: String,
            required: true
        },
        encoding: {
            type: String,
            required: true
        },
        mimetype: {
            type: String,
            required: true
        },
        size: {
            type: Number,
            required: true
        },
        bucket: {
            type: String,
            required: true
        },
        key: {
            type: String,
            required: true
        },
        acl: {
            type: String,
            required: true
        },
        contentType: {
            type: String,
            required: true
        },
        storageClass: {
            type: String,
            required: true
        },
        location: {
            type: String,
            required: true
        },
        etag: {
            type: String,
            required: true
        }
    },
    // REVIEWS
    // RATINGS
    // Featured Review
    isBestSeller: {
        type: Boolean,
        require: true,
        default: false
    },
    // LEVEL 1 => SCHOOL
    // LEVEL 2 => BASIC
    // LEVEL 3 => BEGINNER
    // LEVEL 4 => INTERMEDIATE
    // LEVEL 5 => ADVANCED
    courseLevel: {
        type: Number,
        require: true,
    },
    isPublished: {
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
    courseManager: {
        type: Schema.Types.ObjectId,
        ref: 'Manager'
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