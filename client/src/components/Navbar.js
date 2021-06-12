import { Modal } from 'bootstrap';
import { GoogleLogin } from 'react-google-login';
import { google } from "./../actions/authActions";
import React from 'react';
import PropTypes from "prop-types";
import { connect } from "react-redux";

import {
    BrowserView,
    TabletView,
    MobileOnlyView,
} from "react-device-detect";
import { Component } from 'react';

class Navbar extends Component {
    constructor() {
        super();
        this.state = {
            isSidebarOpen: false
        }
        this.setIsSidebarOpen = this.setIsSidebarOpen.bind(this)
        this.responseSuccessGoogle = this.responseSuccessGoogle.bind(this)
        this.responseErrorGoogle = this.responseErrorGoogle.bind(this)
    }

    responseSuccessGoogle (res) {
        console.log("Google Login successfull");
        const container = document.getElementById("Loader");
        var loader = new Modal(container);
        this.props.google(res.tokenId, loader)
    }

    responseErrorGoogle (err) {
        console.log(err);
    }
    
    setIsSidebarOpen(value) {
        this.setState({ isSidebarOpen: value });
    }

    render() {
        const { isSidebarOpen } = this.state;
        return (
            <div className='navbar-wrapper'>
                <MobileOnlyView>
                {isSidebarOpen ? (
                    <div id="mySidenav" class="sidenav" style={{width: "100%", maxWidth: "250px"}} >
                        <div className='sidebar-justify'>
                            <div className='sidebar-tab'>
                                <a href="javascript:void(0)" class="closebtn" onClick={() => {this.setIsSidebarOpen(false);
                                document.body.style.backgroundColor = "rgba(0,0,0,0)";}}>&times;</a>
                                <a href="/"><i class="fas fa-shapes"></i>&nbsp;&nbsp;&nbsp;Blogs</a>
                                <a href="/"><i class="fas fa-book"></i>&nbsp;&nbsp;&nbsp;Courses</a>
                                <a href="/"><i class="fas fa-calendar-day"></i>&nbsp;&nbsp;&nbsp;Events</a>
                                <a href="/"><i class="fas fa-diagnoses"></i>&nbsp;&nbsp;&nbsp;Quiz</a>
                            </div>
                            <div className='nav-items-mains-tab-bottom' style={{backgroundColor: "transparent", flexDirection: "column", position: 'absolute', bottom: '50px', margin: "25px"}}>
                                <div className='nav-items-mains-tab-bottom' style={{marginBottom: "20px"}}>
                                    {/* <div>
                                        <img src='/profile.png' className='nav-profile-img' alt='Profile IMG' ></img>
                                    </div>
                                    <div><p className='profile-name' >Naman Khater</p></div> */}
                                    <a href="/auth/google"><i class="fas fa-sign-in-alt"></i>&nbsp;&nbsp;&nbsp;Login</a>
                                </div>
                                <img src='/skileria_full_small.png' alt='skileria-logo' className='skileria-logo' ></img>
                            </div>
                        </div>
                    </div>
                    ) : (
                        <div id="mySidenav" class="sidenav"  style={{width: "100%", maxWidth: "0px"}}>
                            <div className='sidebar-justify'>
                                <div className='sidebar-tab'>
                                    <a href="javascript:void(0)" class="closebtn" onClick={() => {this.setIsSidebarOpen(false);
                                    document.body.style.backgroundColor = "rgba(0,0,0,0)";}}>&times;</a>
                                    <a href="/"><i class="fas fa-shapes"></i>&nbsp;&nbsp;&nbsp;Blogs</a>
                                    <a href="/"><i class="fas fa-book"></i>&nbsp;&nbsp;&nbsp;Courses</a>
                                    <a href="/"><i class="fas fa-calendar-day"></i>&nbsp;&nbsp;&nbsp;Events</a>
                                    <a href="/"><i class="fas fa-diagnoses"></i>&nbsp;&nbsp;&nbsp;Quiz</a>
                                </div>
                                <div className='nav-items-mains-tab-bottom' style={{backgroundColor: "transparent", flexDirection: "column", position: 'absolute', bottom: '50px', margin: "25px"}}>
                                    <div className='nav-items-mains-tab-bottom'>
                                    {/* <div>
                                        <img src='/profile.png' className='nav-profile-img' alt='Profile IMG' ></img>
                                    </div>
                                    <div><p className='profile-name' >Naman Khater</p></div> */}
                                    <a href="/auth/google"><i class="fas fa-sign-in-alt"></i>&nbsp;&nbsp;&nbsp;Login</a>
                                </div>
                                    <img src='/skileria_full_small.png' alt='skileria-logo' className='skileria-logo' ></img>
                                </div>
                            </div>
                        </div>
                    )}
                    <span className='menu-icon' onClick={() => {this.setIsSidebarOpen(true)
                    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";}}>&#9776;</span>

                <script src="/sidebar_navigation.js" />
                </MobileOnlyView>
                <BrowserView>
                    <nav className='navbar'>
                        <div className='left'>
                            <div className='nav-items'>
                                <div className='nav-items-mains' style={{backgroundColor: '#fff', marginRight: '25px'}}>
                                <div className='nav-home home' style={{margin: '5px'}} ><a href='/' ><i class="fas fa-home"></i></a></div>
                                </div>
                                <div className='nav-items-mains'>
                                <div><a href='/trendingblogs' ><div>Blog</div></a></div>
                                    <div>Courses</div>
                                    <div>Events</div>
                                    <div>Quiz</div>
                                </div>
                                <div className='nav-items-mains' style={{marginLeft: '25px'}} >
                                    <div style={{margin: '5px'}} ><i class="fas fa-search"></i></div>
                                </div>
                            </div>
                        </div>
                        <div className='navbar-center'>
                            <img src='/skileria_full_small.png' alt='skileria-logo' className='skileria-logo' ></img>
                        </div>
                        <div className='right'>
                                {this.props.auth.isAuthenticated ? (
                                <div className='nav-items-mains-right'><div><img src={this.props.auth.user.image} className='nav-profile-img' alt='profile' ></img></div>
                                <div><p className='profile-name' >Naman</p></div></div>
                                ) : (
                                    <div className='nav-items-mains-right'>
                                    <GoogleLogin
                                        clientId="1021950122459-7oqfgfdtpnhns9gpkoeogo08vmed8719.apps.googleusercontent.com"
                                        render={renderProps => (
                                            <center>
                                            <div onClick={renderProps.onClick} disabled={renderProps.disabled}><a href='/auth/google'><div><p className='profile-name' ><img width="20px" style={{marginBottom: "3px", marginRight: "5px"}} alt="Google sign-in" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png" /> Log In <i class="fas fa-sign-in-alt"></i> </p></div></a></div>
                                            </center>
                                        )}
                                        buttonText="Login"
                                        onSuccess={this.responseSuccessGoogle}
                                        onFailure={this.responseErrorGoogle}
                                        cookiePolicy={'single_host_origin'}
                                    /></div>
                                )}
                        </div>
                    </nav>
                </BrowserView>
                <TabletView>
                    {isSidebarOpen ? (
                    <div id="mySidenav" class="sidenav" style={{width: "100%", maxWidth: "250px"}} >
                        <div className='sidebar-justify'>
                            <div className='sidebar-tab'>
                                <a href="javascript:void(0)" class="closebtn" onClick={() => {this.setIsSidebarOpen(false);
                                document.body.style.backgroundColor = "rgba(0,0,0,0)";}}>&times;</a>
                                <a href="/"><i class="fas fa-shapes"></i>&nbsp;&nbsp;&nbsp;Blogs</a>
                                <a href="/"><i class="fas fa-book"></i>&nbsp;&nbsp;&nbsp;Courses</a>
                                <a href="/"><i class="fas fa-calendar-day"></i>&nbsp;&nbsp;&nbsp;Events</a>
                                <a href="/"><i class="fas fa-diagnoses"></i>&nbsp;&nbsp;&nbsp;Quiz</a>
                            </div>
                            <div className='nav-items-mains-tab-bottom' style={{backgroundColor: "transparent", flexDirection: "column", position: 'absolute', bottom: '50px', margin: "25px"}}>
                                <div className='nav-items-mains-tab-bottom'>
                                {/* <div>
                                        <img src='/profile.png' className='nav-profile-img' alt='Profile IMG' ></img>
                                    </div>
                                    <div><p className='profile-name' >Naman Khater</p></div> */}
                                    <a href="/auth/google"><i class="fas fa-sign-in-alt"></i>&nbsp;&nbsp;&nbsp;Login</a>
                                </div>
                                <img src='/skileria_full_small.png' alt='skileria-logo' className='skileria-logo' ></img>
                            </div>
                        </div>
                    </div>
                    ) : (
                        <div id="mySidenav" class="sidenav"  style={{width: "100%", maxWidth: "0px"}}>
                        <div className='sidebar-justify'>
                            <div className='sidebar-tab'>
                                <a href="javascript:void(0)" class="closebtn" onClick={() => {this.setIsSidebarOpen(false);
                                document.body.style.backgroundColor = "rgba(0,0,0,0)";}}>&times;</a>
                                <a href="/"><i class="fas fa-shapes"></i>&nbsp;&nbsp;&nbsp;Blogs</a>
                                <a href="/"><i class="fas fa-book"></i>&nbsp;&nbsp;&nbsp;Courses</a>
                                <a href="/"><i class="fas fa-calendar-day"></i>&nbsp;&nbsp;&nbsp;Events</a>
                                <a href="/"><i class="fas fa-diagnoses"></i>&nbsp;&nbsp;&nbsp;Quiz</a>
                            </div>
                            <div className='nav-items-mains-tab-bottom' style={{backgroundColor: "transparent", flexDirection: "column", position: 'absolute', bottom: '50px', margin: "25px"}}>
                                <div className='nav-items-mains-tab-bottom'>
                                {/* <div>
                                        <img src='/profile.png' className='nav-profile-img' alt='Profile IMG' ></img>
                                    </div>
                                    <div><p className='profile-name' >Naman Khater</p></div> */}
                                    <a href="/auth/google"><i class="fas fa-sign-in-alt"></i>&nbsp;&nbsp;&nbsp;Login</a>
                                </div>
                                <img src='/skileria_full_small.png' alt='skileria-logo' className='skileria-logo' ></img>
                            </div>
                        </div>
                        </div>
                    )}
                    <span className='menu-icon' onClick={() => {this.setIsSidebarOpen(true)
                    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";}}>&#9776;</span>

                <script src="/sidebar_navigation.js" />
                </TabletView>
            </div>
        )
    }
}

Navbar.propTypes = {
    loginUser : PropTypes.func.isRequired,
    google : PropTypes.func.isRequired,
    auth : PropTypes.object.isRequired,
    errors : PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    auth : state.auth,
    errors : state.errors
})

export default connect(mapStateToProps , { google })(Navbar);