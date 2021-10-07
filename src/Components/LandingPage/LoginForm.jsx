import React, { forwardRef, useState } from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.scss'

const LoginForm = forwardRef((props,ref) => {
    
    return (
        <div className="loginFormContainer">
            <h3>Login Form</h3>
            <form className="loginForm" action="">

                <div className="loginFormElement">
                    <input ref={ref} autoFocus type="text" placeholder="Enter your email address" />
                </div>

                <div className="loginFormElement">
                <input type="password" name="" id="" placeholder="Password"/>
                </div>
                <div className="loginFormElement">
                    <input type="submit" value="Log In" disabled = {true} />
                </div>

                <div className="loginFormElement">
                <Link className="loginFormLink" to='/forgot'>Forgot password?</Link>
                </div>
                
            </form>
            <div className="divider"></div>
            <div className="loginFormButton">
                <button onClick={props.onClick} className="createButton">Create New Account</button>
            </div>
        </div>
    );
});

export default LoginForm;