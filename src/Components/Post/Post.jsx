import React,{useState} from 'react';
import './Post.scss';
import {MoreVert} from '@material-ui/icons';
import {Users} from '../../dummyData';
import {Comments} from '../../dummyData';
import {PermMedia} from '@material-ui/icons';
import Comment from '../../Components/Comment/Comment'


const Post = (props) => {
    const{photo,desc,date,like,comment,userId}=props.post;
    const user =Users.filter(user =>user.id===userId);
    const [isOptionVisible,setIsOptionVisible]=useState(false);
    const [isEditSectionVisible,setIsEditSectionVisible]=useState(false);
    const [isCommentVisible,setIsCommentVisible]=useState(false);
    const [comments,setComments]=useState([]);
    const [file,setFile]=useState(null);
    console.log(user);

    const handleOptionVisible=()=>{
        setIsOptionVisible(!isOptionVisible);
    }

    const handleEditVisible=()=>{
        setIsEditSectionVisible(false);
    }


    const handleEdit=()=>{
        setIsOptionVisible(!isOptionVisible);
        setIsEditSectionVisible(true);
    }

    const handleUpdate=(e)=>{
        e.preventDefault();
        setIsEditSectionVisible(false);
    }

    const handleDelete=()=>{
        setIsOptionVisible(!isOptionVisible);
    }

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
                        <MoreVert onClick={handleOptionVisible} />
                        {
                            isOptionVisible && 
                            <div className="postOption">
                                <span onClick={handleEdit} className="postOptionLink">Edit</span>
                                <span  onClick={handleDelete}className="postOptionLink">Delete</span>
                            </div>
                        }
                    </div>
                </div>
                <div className="postCenter">
                    <span className="postText">{desc}</span>
                    <img className="postImage" src={photo} alt="" />
                    {
                        isEditSectionVisible &&

                            <form onSubmit={handleUpdate} className="postEdit">
                                <div className="postEditElement">
                                    <textarea autoFocus name="" id="" cols="30" rows="5" value={desc}></textarea>
                                </div>
                                <div className="postEditElement">
                                    <label htmlFor="file" className="shareOption">
                                    <PermMedia className="shareIcon"/>
                                    <span className="shareOptionText">Photo</span>
                                    <input
                                        style={{display:"none"}}
                                        type="file"
                                        id="file"
                                        accept=".png,.jpeg,.jpg"
                                        onChange={(e)=>setFile(e.target.files[0])}
                                    />
                                    </label>
                                </div>
                                <div>
                                    <button className="updateButton" type="submit"> 
                                        Update
                                    </button>

                                    <button onClick={handleEditVisible} className="cancelButton" > 
                                        Cancel
                                    </button>
                                </div>
                                
                            </form> 
                            
                    }
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img className="postLikeIcon" src="/Assets/like.png" alt="" />
                        <img className="postLikeIcon" src="/Assets/heart.png" alt="" />
                        <span className="postLikeCounter"> {like} people liked it!</span>
                    </div>
                    <div className="postBottomRight">
                        <span onClick={()=>{setIsCommentVisible(!isCommentVisible)}} className="postCommentText">{comment} comments</span>
                    </div>
                </div>
                {
                    isCommentVisible && <Comment comments={Comments}/>
                }
            </div>
        </div>
    );
};

export default Post;