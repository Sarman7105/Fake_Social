import React, { useRef, useState,useEffect } from "react";
import "./Share.scss";
import { PermMedia } from "@material-ui/icons";
import axios from "axios";

const Share = ({ createPost }) => {
  const key = "9659c4a5a455e86dd552087fbc881e42";
  const desc = useRef();
  const user_id=localStorage.getItem('id');
  const [postImage, setPostImage] = useState(null);
  const [name,setName]=useState("User");
  const [image,setImage]=useState("/Assets/person/noAvatar.png");


  useEffect(()=>{
        
    const url=`http://localhost:8000/api/v1/profileByUserId/${user_id}`;
    axios.get(url)
    .then(res=>{
        setName(res.data.user_name)
        if(res.data.profile_image_url){
            setImage(res.data.profile_image_url);
        }
    })
    .catch(err=>console.log(err));
},[])

  const uploadPicture = (file, setImage) => {
    const key = "9659c4a5a455e86dd552087fbc881e42";
    const url = `https://api.imgbb.com/1/upload`;
    const imageData = new FormData();
    imageData.set("key", key);
    imageData.append("image", file);
    axios
      .post(url, imageData)
      .then((res) => {
        // console.log(res.data.data.display_url);
        setImage(res.data.data.display_url);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const user_id=localStorage.getItem('id');
  
    const post = {
      user_id: user_id,
      body: desc.current.value,
      image: postImage,
    };
    createPost(post);
  };

  const handleOnChange = (e) => {
    //console.log('changed');
    uploadPicture(e.target.files[0], setPostImage);
  };
  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img
            src={image}
            alt=""
            className="shareProfileImage"
          />
          <input
            type="text"
            placeholder={`What's on your mind ${name}?`}
            className="shareInput"
            ref={desc}
          />
        </div>
        <hr className="shareHr" />
        <form className="shareBottom" onSubmit={submitHandler}>
          <div className="shareOptions">
            <label htmlFor="file" className="shareOption">
              <PermMedia className="shareIcon" />
              <span className="shareOptionText">Photo</span>
              <input
                style={{ display: "none" }}
                type="file"
                id="file"
                accept=".png,.jpeg,.jpg"
                onChange={handleOnChange}
              />
            </label>
          </div>
          <button className="shareButton" type="submit">
            Share
          </button>
        </form>
      </div>
    </div>
  );
};

export default Share;
