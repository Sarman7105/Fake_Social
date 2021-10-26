import React, { useRef, useState } from "react";
import "./Share.scss";
import { PermMedia } from "@material-ui/icons";
import axios from "axios";

const Share = ({ createPost }) => {
  const key = "9659c4a5a455e86dd552087fbc881e42";
  const desc = useRef();
  const [postImage, setPostImage] = useState(null);

  const uploadPicture = (file, setImage) => {
    const key = "9659c4a5a455e86dd552087fbc881e42";
    const url = `https://api.imgbb.com/1/upload`;
    const imageData = new FormData();
    imageData.set("key", key);
    imageData.append("image", file);
    axios
      .post(url, imageData)
      .then((res) => {
        console.log(res.data.data.display_url);
        setImage(res.data.data.display_url);
      })
      .catch((err) => {
        console.log("error occured");
      });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const post = {
      user_id: 1,
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
            src="/Assets/person/1.jpeg"
            alt=""
            className="shareProfileImage"
          />
          <input
            type="text"
            placeholder="What's on your mind?"
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
