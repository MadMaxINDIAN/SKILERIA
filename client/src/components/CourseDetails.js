import React from "react";
import { Link } from 'react-router-dom';

const CourseDetails = (props) => {
    return (
        <div className="course-details">
            <div className="d-flex course-card" style={{justifyContent: "space-between"}}>
                <div className="course-name"><Link>Course Name</Link></div>
                <div className="see-all"><Link>See all</Link></div>
            </div>
            <div className="course-topic">
                <Link><i class="fas fa-stream"></i> Course Topic One</Link>
            </div>
        </div>
    )
}

export default CourseDetails;