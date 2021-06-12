import React from 'react';
import { Modal } from 'bootstrap';
import { Link } from 'react-router-dom';
import { GoogleLogin } from 'react-google-login';
import classnames from "classnames"
import { Component } from 'react';
import {withRouter} from 'react-router-dom';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser, google } from "./../actions/authActions";

class Login extends Component {
    constructor () {
        super();
        this.state = {
            isAuthenticated: false,
            email: "",
            password: "",
            errors: {}
        }
        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.loginHandler = this.loginHandler.bind(this);
        this.responseSuccessGoogle = this.responseSuccessGoogle.bind(this)
    }

    responseSuccessGoogle (res) {
        const container = document.getElementById("Loader");
        var loader = new Modal(container);
        this.props.google(res.tokenId, loader)
    }

    componentWillReceiveProps(next) {
        if (next.errors){
            this.setState({errors: next.errors})
        }
        if (next.auth.isAuthenticated) {
            this.props.history.push("/")
        }
    }

    componentDidMount () {
        if (this.props.auth.isAuthenticated) {
            this.props.history.push("/")
        }
    }

    loginHandler(e) {
        const container = document.getElementById("Loader");
        var loader = new Modal(container);
        this.props.loginUser(this.state, this.props.history, loader)
    }

    onChangeHandler(e){
        this.setState({[e.target.name]: e.target.value});
    }

    responseErrorGoogle (err) {
        console.log(err);
    }

    render() {
        const { email, password, errors } = this.state;
        return (
        <div className='login-form'>
                    <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="SignUpModalLabel">Log In</h5>
                        </div>
                        <div className="modal-body">
                            <div className='row'>
                                <div className='col-12'>
                                    <div className="input-group mb-3">
                                        <span className="input-group-text" id="email"><i className="far fa-envelope-open"></i></span>
                                        <input 
                                            type="text" 
                                            value={email} 
                                            name="email" 
                                            onChange={this.onChangeHandler} 
                                            className={classnames("form-control", {
                                                "is-invalid" : errors.email
                                            })}
                                            placeholder="Email" 
                                            aria-label="Email" 
                                            aria-describedby="email" />
                                            {errors.email && (<div className="invalid-feedback">{errors.email}</div>)}
                                        </div>
                                </div>
                                <div className='col-12'>
                                    <div className="input-group mb-3">
                                        <span className="input-group-text"><i className="fas fa-lock"></i></span>
                                        <input 
                                            type="password" 
                                            value={password} 
                                            name="password" 
                                            onChange={this.onChangeHandler} 
                                            aria-label="Password" 
                                            placeholder="Password" 
                                            className={classnames("form-control", {
                                                "is-invalid" : errors.password
                                            })}/>
                                            {errors.password && (<div className="invalid-feedback">{errors.password}</div>)}
                                    </div>
                                </div>
                                <div className='col-12 mb-3'>
                                    <div className="d-grid gap-2">
                                        <button className="btn btn-primary" onClick={this.loginHandler} type="button">Log In</button>
                                    </div>
                                </div>
                                <hr />
                                <div className="col-2"></div>
                                <div className="col-8 mb-3">
                                <GoogleLogin
                                    clientId="1021950122459-7oqfgfdtpnhns9gpkoeogo08vmed8719.apps.googleusercontent.com"
                                    render={renderProps => (
                                        <center>
                                        <button className='btn btn-outline-secondary' onClick={renderProps.onClick} disabled={renderProps.disabled}>
                                            <img width="20px" style={{marginBottom: "3px", marginRight: "5px"}} alt="Google sign-in" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png" /> 
                                            Log In with Google
                                        </button>
                                        </center>
                                    )}
                                    buttonText="Login"
                                    onSuccess={this.responseSuccessGoogle}
                                    onFailure={this.responseErrorGoogle}
                                    cookiePolicy={'single_host_origin'}
                                />
                                </div>
                                <div className="col-2"></div>
                                <center>
                                    <div className="text-danger">{errors.message}</div>
                                    If you not have account, 
                                    <Link to="/signup" className="btn">
                                        Sign Up
                                    </Link>
                                    here
                                </center>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
        )
    }
}

Login.propTypes = {
    loginUser : PropTypes.func.isRequired,
    google : PropTypes.func.isRequired,
    auth : PropTypes.object.isRequired,
    errors : PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    auth : state.auth,
    errors : state.errors
})

export default withRouter(connect(mapStateToProps , {loginUser, google})(Login));