import React, { useEffect, useState } from "react";
import "./Profile.scss";
import Feed from "../Feed/Feed";
import Navbar from "../Navbar/Navbar";
import Rightbar from "../Rightbar/Rightbar";
import Sidebar from "../Sidebar/Sidebar";
import ProfileEdit from "../ProfileEdit/ProfileEdit.jsx";
import axios from "axios";
import { useParams } from "react-router";

const Profile = () => {
  const [profileImage, setProfileImage] = useState(
    "/Assets/person/noAvatar.png"
  );
  const [coverImage, setCoverImage] = useState(
    "/Assets/post/NoCoverPicture.jpg"
  );
  const[city,setCity]=useState("");
  const[country,setCountry]=useState("");
  const[relationship,setRelationship]=useState("");
  const [isEditing, setIsEditing] = useState(false);
  const[name,setName]=useState('');
  const {id}=useParams();
  const user_id=localStorage.getItem('id');
  // console.log(id);

  const handleOnBlur = () => {
    setIsEditing(false);
  };
  
  const setState=(data)=>{
    if(data.profile_image_url){
      setProfileImage(data.profile_image_url);
    }
    
    if(data.cover_image_url){
      setCoverImage(data.cover_image_url);
    }
    
    setCity(data.city);
    setCountry(data.country);
    setRelationship(data.relationship);
    setName(data.user_name);

  }

  const fetchProfile=()=>{
    
    // const id=localStorage.getItem('id');
    const url = `http://localhost:8000/api/v1/profileByUserId/${id}`;
    axios
      .get(url)
      .then((res) => {
        const data = res.data;
        setState(data);
        
      })
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    fetchProfile();
    
  }, []);

  const updateProfile = (bodyParameters) => {
      console.log(bodyParameters);
    const url = "http://localhost:8000/api/v1/updateProfile";
    axios
      .post(url, bodyParameters)
      .then((res) => {
        console.log(res.data);
        fetchProfile();
      })
      .catch((err) => {
        console.log(err);
      });
      setIsEditing(false);
  };

  return (
    <div>
      <Navbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img className="profileCoverImage" src={coverImage} alt="" />
              <img className="profileUserImage" src={profileImage} alt="" />
            </div>
            <div className="profileInfo">
              <h4 className="profileUserName">{name}</h4>
              {(user_id==id) &&<button
                onClick={() => setIsEditing(true)}
                className="profileEditButton"
              >
                Edit Profile
              </button>}
              {/* <span  className="profileDesc"> 
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Id expedita eos pariatur dolorem nihil cumque omnis doloremque beatae voluptatibus assumenda.
                             </span> */}
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed profile={true} user_id={id} />
            <Rightbar info={{city,country,relationship}} profile={true} />
          </div>
        </div>
      </div>
      {isEditing && (
        <ProfileEdit updateProfile={updateProfile} onBlur={handleOnBlur} />
      )}
    </div>
  );
};

export default Profile;
