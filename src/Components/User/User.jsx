import axios from "axios";
import React,{useState,useEffect} from "react";
import { Link } from "react-router-dom";
import "./User.scss";
const User = ({user}) => {
  const [name,setName]=useState("User");
  const [image,setImage]=useState("/Assets/person/noAvatar.png");
  useEffect(()=>{
        
    const url=`http://localhost:8000/api/v1/profileByUserId/${user.id}`;
    axios.get(url)
    .then(res=>{
        setName(res.data.user_name)
        if(res.data.profile_image_url){
            setImage(res.data.profile_image_url);
        }
    })
    .catch(err=>console.log(err));
},[])
  return (
    <li className="rightbarFriend">
      <div className="rightbarProfileImageContainer">
        <img
          src={image}
          alt=""
          className="rightbarProfileImage"
        />
        <span className="rightbarOnline"></span>
      </div>
      <Link  to={`/profile/${user.id}`} className="rightbarUserName">{name}</Link>
    </li>
  );
};

export default User;
