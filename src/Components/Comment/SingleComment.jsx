import React, { useEffect, useState } from 'react';
import './singleComment.scss';
import {Users} from '../../dummyData'
import axios from 'axios';

const SingleComment = (props) => {
    const {user_id}=props.comment;
    const [name,setName]=useState("User");
    const [image,setImage]=useState("/Assets/person/noAvatar.png");
    // const user=Users.find((user)=>user.id===props.comment.user_id)
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
    },[user_id])
    return (
        <div className="singleComment">
            <div className="image">
                <img src={image} alt="" />
            </div>
            <div className="body">
                <div className="userName">
                    <h4>{name}</h4>
                </div>
                <div className="commentBody">
                    <span>{props.comment.comment}</span>
                </div>
            </div>
        </div>
    );
};

export default SingleComment;