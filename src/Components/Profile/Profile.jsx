import React from 'react';
import './Profile.scss';
import Feed from '../Feed/Feed';
import Navbar from '../Navbar/Navbar';
import Rightbar from '../Rightbar/Rightbar';
import Sidebar from '../Sidebar/Sidebar';

const Profile = () => {
    return (
        <div>
            <Navbar/>
            <div className="profile">
                <Sidebar/>
                <div className="profileRight">
                    <div className="profileRightTop">
                        <div className="profileCover">

                            <img className="profileCoverImage" src="/Assets/post/3.jpeg" alt="" />
                            <img className="profileUserImage" src="/Assets/person/4.jpeg" alt="" />
                        </div>
                        <div className="profileInfo">
                            <h4 className="profileUserName">Sarman Khurshid Alam</h4>
                            <span  className="profileDesc"> 
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Id expedita eos pariatur dolorem nihil cumque omnis doloremque beatae voluptatibus assumenda.
                             </span>
                        </div>
                    </div>
                    <div className="profileRightBottom">
                        <Feed/>
                        <Rightbar profile={true}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;