import React from 'react';
import './Post.scss';
import {MoreVert} from '@material-ui/icons';
import {Users} from '../../dummyData';

const Post = (props) => {
    const{photo,desc,date,like,comment,userId}=props.post;
    const user =Users.filter(user =>user.id===userId);
    console.log(user);
    return (
        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img src={user[0].profilePicture} alt="" className="postProfileImage" />
                        <span className="postUserName">{user[0].username}</span>
                        <span className="postDate">{date}</span>
                    </div>
                    <div className="postTopRight">
                        <MoreVert/>
                    </div>
                </div>
                <div className="postCenter">
                    <span className="postText">{desc}</span>
                    <img className="postImage" src={photo} alt="" />
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img className="postLikeIcon" src="/Assets/like.png" alt="" />
                        <img className="postLikeIcon" src="/Assets/heart.png" alt="" />
                        <span className="postLikeCounter"> {like} people liked it!</span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postCommentText">{comment} comments</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Post;