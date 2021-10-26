import React,{useEffect, useState} from 'react';
import './Profile.scss';
import Feed from '../Feed/Feed';
import Navbar from '../Navbar/Navbar';
import Rightbar from '../Rightbar/Rightbar';
import Sidebar from '../Sidebar/Sidebar';
import ProfileEdit from '../ProfileEdit/ProfileEdit.jsx';
import axios from 'axios';

const Profile = () => {
    const[profileImage,setProfileImage]=useState("/Assets/person/noAvatar.png");
    const[coverImage,setCoverImage]=useState("/Assets/post/NoCoverPicture.jpg");
    const [isEditing,setIsEditing]=useState(false);
    const handleOnBlur=()=>{
        setIsEditing(false);
    }
    useEffect(()=>{
        const url='http://localhost:8000/api/v1/profileByUserId/1';
        axios.get(url)
        .then(res=>{
           
            const data=res.data;
            console.log(data);
            setProfileImage(data.profile_image_url);
            setCoverImage(data.cover_image_url);
        })
        .catch(err=>console.log(err))

    },[])

    return (
        <div>
            <Navbar/>
            <div className="profile">
                <Sidebar/>
                <div className="profileRight">
                    <div className="profileRightTop">
                        <div className="profileCover">

                            <img className="profileCoverImage" src={coverImage} alt="" />
                            <img className="profileUserImage" src={profileImage} alt="" />
                        </div>
                        <div className="profileInfo">
                            <h4 className="profileUserName">Sarman Khurshid Alam</h4>
                            <button onClick={()=>setIsEditing(true)} className="profileEditButton">Edit Profile</button>
                            {/* <span  className="profileDesc"> 
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Id expedita eos pariatur dolorem nihil cumque omnis doloremque beatae voluptatibus assumenda.
                             </span> */}
                        </div>
                    </div>
                    <div className="profileRightBottom">
                        <Feed profile={true}/>
                        <Rightbar profile={true}/>
                    </div>
                </div>
            </div>
            {
                isEditing && <ProfileEdit onBlur={handleOnBlur}/>
            }
        </div>
    );
};

export default Profile;