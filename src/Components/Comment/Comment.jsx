import React, { useState } from 'react';
import './Comment.scss';
import SingleComment from './SingleComment';


const Comment = (props) => {
    const[index,setIndex]=useState(1);
    const [comments,setComments]=useState([]);

    return (
        <div className="comment">
            <div className="newComment">
                <div className="commentUserImage">
                    <img src="/Assets/person/1.jpeg" alt="" />
                </div>
                <form action="" className="commentForm">
                    <input autoFocus type="text"  placeholder="write a comment"/>
                </form>
            </div>
            <div className="oldComments">
                {
                    props.comments.map((cmt)=><SingleComment comment={cmt}/>)
                    
                }
            </div>
        </div>
    );
};

export default Comment;