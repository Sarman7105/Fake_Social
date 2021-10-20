import React from 'react';
import BirthdayContainer from './BirthdayContainer';
import './HomeRightbar'

const HomeRightbar = () => {
    return (
        <>
            <BirthdayContainer/>
            <img src="/Assets/ad.png" alt="" className="rightbarAdd" />
                <h3 className="RightbarTitle"> Users</h3>
                <ul className="rightbarFriendList">
                    <li className="rightbarFriend">
                        <div className="rightbarProfileImageContainer">
                            <img src="/Assets/person/2.jpeg" alt="" className="rightbarProfileImage" />
                            <span className="rightbarOnline"></span>
                        </div>
                        <span className="rightbarUserName">
                            Fariha Tasnim
                        </span>
                    </li>
                    <li className="rightbarFriend">
                        <div className="rightbarProfileImageContainer">
                            <img src="/Assets/person/2.jpeg" alt="" className="rightbarProfileImage" />
                            <span className="rightbarOnline"></span>
                        </div>
                        <span className="rightbarUserName">
                            Fariha Tasnim
                        </span>
                    </li>
                    <li className="rightbarFriend">
                        <div className="rightbarProfileImageContainer">
                            <img src="/Assets/person/2.jpeg" alt="" className="rightbarProfileImage" />
                            <span className="rightbarOnline"></span>
                        </div>
                        <span className="rightbarUserName">
                            Fariha Tasnim
                        </span>
                    </li>
                    <li className="rightbarFriend">
                        <div className="rightbarProfileImageContainer">
                            <img src="/Assets/person/2.jpeg" alt="" className="rightbarProfileImage" />
                            <span className="rightbarOnline"></span>
                        </div>
                        <span className="rightbarUserName">
                            Fariha Tasnim
                        </span>
                    </li>
                    <li className="rightbarFriend">
                        <div className="rightbarProfileImageContainer">
                            <img src="/Assets/person/2.jpeg" alt="" className="rightbarProfileImage" />
                            <span className="rightbarOnline"></span>
                        </div>
                        <span className="rightbarUserName">
                            Fariha Tasnim
                        </span>
                    </li>
                    <li className="rightbarFriend">
                        <div className="rightbarProfileImageContainer">
                            <img src="/Assets/person/2.jpeg" alt="" className="rightbarProfileImage" />
                            <span className="rightbarOnline"></span>
                        </div>
                        <span className="rightbarUserName">
                            Fariha Tasnim
                        </span>
                    </li>
                </ul>
        </>
    );
};

export default HomeRightbar;