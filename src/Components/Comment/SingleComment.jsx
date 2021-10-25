import React from 'react';
import './singleComment.scss';
import {Users} from '../../dummyData'

const SingleComment = (props) => {
    const user=Users.find((user)=>user.id===props.comment.userId)
    return (
        <div className="singleComment">
            <div className="image">
                <img src={`/Assets/person/${props.comment.userId}.jpeg`} alt="" />
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