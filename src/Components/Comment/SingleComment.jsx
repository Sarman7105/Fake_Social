import React from 'react';
import './singleComment.scss';
import {Users} from '../../dummyData'

const SingleComment = (props) => {
    console.log(props.comment)
    const user=Users.find((user)=>user.id===props.comment.user_id)
    return (
        <div className="singleComment">
            <div className="image">
                <img src={`/Assets/person/${props.comment.user_id}.jpeg`} alt="" />
            </div>
            <div className="body">
                <div className="userName">
                    <h4>{user.username}</h4>
                </div>
                <div className="commentBody">
                    <span>{props.comment.comment}</span>
                </div>
            </div>
        </div>
    );
};

export default SingleComment;