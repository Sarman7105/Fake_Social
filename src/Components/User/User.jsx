import React from "react";
import { Link } from "react-router-dom";
import "./User.scss";
const User = ({user}) => {
  return (
    <li className="rightbarFriend">
      <div className="rightbarProfileImageContainer">
        <img
          src="/Assets/person/2.jpeg"
          alt=""
          className="rightbarProfileImage"
        />
        <span className="rightbarOnline"></span>
      </div>
      <Link  to={`/profile/${user.id}`} className="rightbarUserName">Fariha Tasnim</Link>
    </li>
  );
};

export default User;
