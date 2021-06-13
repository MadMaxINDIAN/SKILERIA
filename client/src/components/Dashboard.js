import React from "react";
import { Component } from "react";
import ProfileDetails from "./profileDetails";
import PropTypes from "prop-types";
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import CourseDetails from "./CourseDetails";

class Dashboard extends Component {
    constructor() {
        super();
        this.state = {}
    }

    render () {
        return (
            <div className="dashboard" style={{backgroundColor: "#fff"}}>
                <ProfileDetails 
                    image={this.props.auth.user.image}
                    name={this.props.auth.user.first_name + " " + this.props.auth.user.last_name}
                />
                <div className="container" style={{backgroundColor: "#fff", boxShadow: "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px"}}>
                    <div className="row">
                        <div className="col-sm-12 col-md-4 col-lg-3 right-border">
                            <div className="" style={{padding: "40px 0px 0px 0px"}}>
                                <div className="sidebar-padding-left" style={{color: "#555"}}>MY STUFF</div>
                                <div className="sidebar-button selected-sidebar-button">Courses</div>
                                <div className="sidebar-padding-left" style={{color: "#555", marginTop: "25px"}}>MY ACCOUNT</div>
                                <div className="sidebar-button">Progress</div>
                                <div className="sidebar-button">Profile</div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-8 col-lg-9">
                            <div className="container">
                                <div className="d-flex" style={{justifyContent: "space-between", margin: "40px 0px 0px 0px"}}>
                                    <div className="my-course">My Courses</div>
                                    <div className="btn">Edit Courses</div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-12 col-md-12 col-lg-6">
                                        <CourseDetails />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
Dashboard.propTypes = {
    auth : PropTypes.object.isRequired,
    errors : PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    auth : state.auth,
    errors : state.errors
})

export default connect(mapStateToProps , { })(Dashboard);