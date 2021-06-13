import Navbar from "../components/Navbar";
import { BrowserView } from "react-device-detect";
import SkileriaAdvantages from "../components/advantages";
import { Component } from "react";
import { GoogleLogin } from 'react-google-login';
import PropTypes from "prop-types";
import { latestCourses } from "../actions/courseActions";
import { google } from "./../actions/authActions";
import { Modal } from 'bootstrap';
import { connect } from "react-redux";
import Dashboard from "../components/Dashboard";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      latestCourses: []
    };
    this.responseSuccessGoogle = this.responseSuccessGoogle.bind(this)
    this.responseErrorGoogle = this.responseErrorGoogle.bind(this)
  }
  responseSuccessGoogle (res) {
    const container = document.getElementById("Loader");
    var loader = new Modal(container);
    this.props.google(res.tokenId, loader)
  }

  responseErrorGoogle (err) {
    console.log(err);
  }     


  componentDidMount() {
    this.props.latestCourses()
  }

  componentWillReceiveProps (next) {
    this.setState({latestCourses: next.courses.latestCourses})
  }

  render() {
    console.log(this.props.courses.latestCourses);
    return (
      <div className="Home">
      <Navbar page="home"></Navbar>
      <BrowserView>
        <div className="margin-top-120"></div>
      </BrowserView>
      {this.props.auth.isAuthenticated ? (
        <Dashboard />
      ) : (
        <div>
          <SkileriaAdvantages />
        </div>
      )}
      <div className="container">
        <div className="d-flex" style={{justifyContent: "space-between", margin: "40px 0px 20px 0px"}}>
          <div className="my-course">Some of the Most Popular Courses</div>
          <div className="btn">See all</div>
        </div>
      <hr />
        <div className="row" style={{marginBottom: "40px"}}>
          {this.state.latestCourses.map(course => {
            return (
              <div className="col-sm-12 col-md-6 col-lg-4" key={course._id} style={{margin: "0px 0px 30px 0px"}}>
                <div className="card">
                  <img src={course.courseIMG.location} alt="Course Thumbnail"/>
                  <div className="course-card-details">
                    <div className="course-card-title">{course.name}</div>
                    <div className="course-card-description">
                      {course.description.slice(0, 100) + " . . ."}
                    </div>
                    <div className="d-flex course-tags" style={{justifyContent: "space-between", alignItems: "center"}}>
                      <div className="d-flex">
                        <div><span class="w3-tag w3-red">New</span></div>
                        <div><span class="w3-tag w3-blue">{course.language}</span></div>
                        <div><span class="w3-tag w3-yellow  ">Free</span></div>
                      </div>
                      {this.props.auth.isAuthenticated ? (
                        <div className="btn btn-outline-success">Start Now</div>
                      ) : (
                        <div>
                        {/* <div><span class="btn btn-outline-dark">
                        <img width="20px" style={{marginBottom: "3px", marginRight: "5px"}} alt="Google sign-in" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png" /> Log In 
                          </span></div> */}
                        <GoogleLogin
                          clientId="1021950122459-7oqfgfdtpnhns9gpkoeogo08vmed8719.apps.googleusercontent.com"
                          render={renderProps => (
                              <center>
                              <div onClick={renderProps.onClick} disabled={renderProps.disabled}><a href='/auth/google'><div><p className='profile-name' ><img width="20px" style={{marginBottom: "3px", marginRight: "5px"}} alt="Google sign-in" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png" /></p></div></a></div>
                              </center>
                          )}
                          buttonText="Login"
                          onSuccess={this.responseSuccessGoogle}
                          onFailure={this.responseErrorGoogle}
                          cookiePolicy={'single_host_origin'}
                      />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )}
}
Home.propTypes = {
  latestCourses: PropTypes.func.isRequired,
  google: PropTypes.func.isRequired,
  auth : PropTypes.object.isRequired,
  errors : PropTypes.object.isRequired,
  courses : PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
  auth : state.auth,
  errors : state.errors,
  courses : state.courses
})

export default connect(mapStateToProps , {latestCourses, google})(Home);