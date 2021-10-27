import React from 'react';
import BirthdayContainer from './BirthdayContainer';
import HomeRightbar from './HomeRightbar';
import ProfileRightbar from './ProfileRightbar';
import './Rightbar.scss';
const Rightbar = ({profile,info}) => {
    return (
        <div className="rightbar">
            <div className="rightbarWrapper">
                { !profile ?<HomeRightbar/>: <ProfileRightbar info={info} />
                }
            </div>
            
            
        </div>
    );
};

export default Rightbar;