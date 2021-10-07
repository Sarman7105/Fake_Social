import React from 'react';
import './VerifyUser.scss';
import Card from '../../Components/UI/Card/Card';
import { Link } from 'react-router-dom';

const VerifyUser = () => {
    return (
        <div className='verifyUser'>
            <Card className="verifyUserCard">
                <p>A code has been sent to your email address. Please enter your verification code </p>
                <form action="">
                <div className="veifyUserFormElement">
                    <input  autoFocus type="number" placeholder="Enter verification code0" />
                </div>

                <div className="veifyUserFormElement">
                    <input type="submit" value="Submit" />

                <Link to='/' className="link">
                    <button className="veifyUserCancel">
                       Cancel
                    </button> 
                </Link>
                </div>
                </form>
            </Card>
        </div>
    );
};

export default VerifyUser;