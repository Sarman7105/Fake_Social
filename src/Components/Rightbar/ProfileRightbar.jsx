import React from 'react';
import './ProfileRightbar.scss';

const ProfileRightbar = ({info}) => {
    console.log(info);
    return (
        <>
            <h4 className="rightbarTitle">User information</h4>
            <div className="rightbarInfo">
                <div className="rightbarInfoItem">
                    <span className="rightbarInfoKey">City:</span>
                    <span className="rightbarInfoValue">{info?.city}</span>
                </div>
                <div className="rightbarInfoItem">
                    <span className="rightbarInfoKey">From:</span>
                    <span className="rightbarInfoValue">{info?.country}</span>
                </div>
                <div className="rightbarInfoItem">
                    <span className="rightbarInfoKey">Relationship:</span>
                    <span className="rightbarInfoValue">{info?.relationship}</span>
                </div>
            </div>
            <h4 className="rightbarTitle">User friends</h4>
            <div className="rightbarFollowings">
                <div className="rightbarFollowing">
                    <img src="/Assets/person/1.jpeg" alt="" className="rightbarFollowingImage" />
                    <span className="rightbarFollowingName">Sarman Khurshid</span>
                </div>

                <div className="rightbarFollowing">
                    <img src="/Assets/person/2.jpeg" alt="" className="rightbarFollowingImage" />
                    <span className="rightbarFollowingName">Sarman Khurshid</span>
                </div>

                <div className="rightbarFollowing">
                    <img src="/Assets/person/3.jpeg" alt="" className="rightbarFollowingImage" />
                    <span className="rightbarFollowingName">Sarman Khurshid</span>
                </div>

                <div className="rightbarFollowing">
                    <img src="/Assets/person/4.jpeg" alt="" className="rightbarFollowingImage" />
                    <span className="rightbarFollowingName">Sarman Khurshid</span>
                </div>

                <div className="rightbarFollowing">
                    <img src="/Assets/person/5.jpeg" alt="" className="rightbarFollowingImage" />
                    <span className="rightbarFollowingName">Sarman Khurshid</span>
                </div>

                <div className="rightbarFollowing">
                    <img src="/Assets/person/6.jpeg" alt="" className="rightbarFollowingImage" />
                    <span className="rightbarFollowingName">Sarman Khurshid</span>
                </div>


            </div>
        </>
    );
};

export default ProfileRightbar;