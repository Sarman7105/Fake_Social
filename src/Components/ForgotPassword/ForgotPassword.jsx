import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../UI/Card/Card';
import './ForgotPassword.scss';

const ForgotPassword = () => {
    return (
        <div className="forgotPassword">
            <Card className="forgotPasswordCard">
                <h3>Find your account</h3>
                <div className="divider"></div>
                <p>Enter your email address to find your account.</p>
                <form action="">
                <div className="forgotPasswordFormElement">
                    <input  autoFocus type="text" placeholder="Enter your email address" />
                </div>

                <div className="forgotPasswordFormElement">
                    <input type="submit" value="Submit" />

                <Link to='/' className="link">
                    <button className="forgotPasswordCancel">
                       Cancel
                    </button> 
                </Link>
                </div>
                </form>
            </Card>
            
        </div>
    );
};

export default ForgotPassword;