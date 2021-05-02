import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import {
    BrowserView,
    MobileView,
    isBrowser,
    isMobile,
    isTablet,
    TabletView,
    MobileOnlyView,
    isMobileOnly
} from "react-device-detect";

const Navbar = (props) => {
    var [isSidebarOpen, setIsSidebarOpen] = useState(false)
    // var blog = (<div><a href='/trendingblogs' ><div>Blog</div></a></div>)
    // var auth = (<div><a href='/auth/google'><div><p className='profile-name' >Log In <i class="fas fa-sign-in-alt"></i> </p></div></a></div>)
    // var events = (<div><a href='#' ><div>Events</div></a></div>)
    // var team = (<div><a href='#' ><div>Team</div></a></div>)
    // var club = (<div><a href='#' ><div>Club</div></a></div>)
    // // switch (props.page) {
    //     case 'home': {
    //         home = (<div className='nav-home home-active' style={{margin: '5px'}} ><i class="fas fa-home"></i></div>)
    //         console.log('Home Page');
    //         break;
    //     }
    //     case 'trendingbloglandingpage': {
    //         blog = (<div className='active'>Blog</div>)
    //         break;
    //     }
    //     case 'blogsearch': {
    //         blog = (<div className='active'>Blog</div>)
    //         break;
    //     }
    //     default: {
    //         break;
    //     }
    // }
    return (
        <div className='navbar-wrapper'>
            <MobileOnlyView>
            {isSidebarOpen ? (
                <div id="mySidenav" class="sidenav" style={{width: "100%", maxWidth: "250px"}} >
                    <div className='sidebar-justify'>
                        <div className='sidebar-tab'>
                            <a href="javascript:void(0)" class="closebtn" onClick={() => {setIsSidebarOpen(false);
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
                                <a href="javascript:void(0)" class="closebtn" onClick={() => {setIsSidebarOpen(false);
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
                <span className='menu-icon' onClick={() => {setIsSidebarOpen(true)
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
                        <div className='nav-items-mains-right'>
                            {/* <div><img src='/profile.png' className='nav-profile-img' alt='profile-CHRD' ></img></div>
                            <div><p className='profile-name' >Naman</p></div> */}
                            <div><a href='/auth/google'><div><p className='profile-name' >Log In <i class="fas fa-sign-in-alt"></i> </p></div></a></div>
                        </div>
                    </div>
                </nav>
            </BrowserView>
            <TabletView>
                {isSidebarOpen ? (
                <div id="mySidenav" class="sidenav" style={{width: "100%", maxWidth: "250px"}} >
                    <div className='sidebar-justify'>
                        <div className='sidebar-tab'>
                            <a href="javascript:void(0)" class="closebtn" onClick={() => {setIsSidebarOpen(false);
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
                            <a href="javascript:void(0)" class="closebtn" onClick={() => {setIsSidebarOpen(false);
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
                <span className='menu-icon' onClick={() => {setIsSidebarOpen(true)
                document.body.style.backgroundColor = "rgba(0,0,0,0.4)";}}>&#9776;</span>

            <script src="/sidebar_navigation.js" />
            </TabletView>
        </div>
    )
}

export default Navbar;
