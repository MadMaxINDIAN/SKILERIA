import React from "react";

const profileDetails = (props) => {
    return (
        <div className="profile-component">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-md-6">
                        <div className="flex-col">
                            <div className="d-flex">
                                <div className="dash-profile-image">
                                    <img src={props.image} alt="profile" />
                                </div>
                                <div className="hover-white dash-profile-margin">
                                    <div className="large-text">{props.name}</div>
                                    <div className="">Edit Profile</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6">
                    </div>
                </div>
            </div>
        </div>
    )
}

export default profileDetails;