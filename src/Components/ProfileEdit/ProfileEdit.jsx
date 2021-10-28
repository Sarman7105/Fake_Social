import axios from "axios";
import React, { useRef, useState, useContext } from "react";
import { Close } from "@material-ui/icons";
import { useHistory } from "react-router";
import "./ProfileEdit.scss";
import AuthContext from "../../Store/AuthContext";
const ProfileEdit = (props) => {
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [profileImage, setProfileImage] = useState(null);
  const [coverImage, setCoverImage] = useState(null);
  const [relationship, setRelationship] = useState(null);

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

  const uploadProfileImage = (e) => {
    // setProFile(e.target.files[0]);
    uploadPicture(e.target.files[0], setProfileImage);
  };

  const uploadCoverImage = (e) => {
    // setCoverFile(e.target.files[0]);
    uploadPicture(e.target.files[0], setCoverImage);
  };

  //form submitting function
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(profileImage, coverImage);
    const isSubmitable = !!(
      city ||
      country ||
      relationship ||
      profileImage ||
      coverImage
    );

    if (isSubmitable) {
      const user_id=localStorage.getItem('id');
      const bodyParameters = {
        user_id: user_id,
        city: city,
        country: country,
        relationship: relationship,
        profile_image_url: profileImage,
        cover_image_url: coverImage,
      };
      props.updateProfile(bodyParameters);
    }
  };

  const handleClick = () => {
    props.onBlur();
  };

  return (
    <div className="editWrapper">
      <div className="editFormContainer">
        <div className="editTop">
          <h3>Update Profile</h3>
          <Close className="editClose" onClick={handleClick} />
        </div>
        <hr />
        <form onSubmit={handleSubmit} className="editForm">
          <div className="editInputElement">
            <label htmlFor="profile">Profile Picture</label>
            <input type="file" id="profile" onChange={uploadProfileImage} />
          </div>

          <div className="editInputElement">
            <label htmlFor="profile">Cover Picture</label>
            <input type="file" id="profile" onChange={uploadCoverImage} />
          </div>

          <div className="bioInfo">
            <div className="editInputElement">
              <input
                name="city"
                type="text"
                placeholder="Enter your City"
                onChange={(e) => {
                  setCity(e.target.value);
                }}
              />
            </div>

            <div className="editInputElement">
              <input
                type="text"
                name="country"
                placeholder="Enter your Country"
                onChange={(e) => {
                  setCountry(e.target.value);
                }}
              />
            </div>
          </div>

          <div className="editInputElement">
            <p className="smallText">
              {" "}
              <small>Relationship ?</small>{" "}
            </p>
            <div className="editRadioContainer">
              <div className="gender">
                <label htmlFor="single">Single</label>
                <input
                  type="radio"
                  value="Single"
                  name="relationship"
                  id="single"
                  onChange={(e) => {
                    setRelationship(e.target.value);
                  }}
                />
              </div>

              <div className="gender">
                <label htmlFor="married">Married</label>
                <input
                  type="radio"
                  value="Married"
                  name="relationship"
                  id="married"
                  onChange={(e) => {
                    setRelationship(e.target.value);
                  }}
                />
              </div>
            </div>
          </div>

          <div className="editInputElement">
            <input type="submit" value="Update" disabled={false} />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProfileEdit;
