import React,{useEffect, useState} from 'react';
import './Post.scss';
import {MoreVert} from '@material-ui/icons';
import {Users} from '../../dummyData';
import {Comments} from '../../dummyData';
import {PermMedia} from '@material-ui/icons';
import Comment from '../../Components/Comment/Comment'
import axios from 'axios';


const Post = (props) => {
    const{image,body,date,comments,user_id,id}=props.post;
    // console.log(user_id,localStorage.getItem('id'));
    const{editPost,deletePost}=props;
    const[user,setUser]=useState({});
    const [isOptionVisible,setIsOptionVisible]=useState(false);
    const[post,setPost]=useState([]);
    const[likes,setLikes]=useState(props.post.likes);
    const [isEditSectionVisible,setIsEditSectionVisible]=useState(false);
    const [isCommentVisible,setIsCommentVisible]=useState(false);
    const [commentsNo,setCommentsNo]=useState(comments.length);
    const[postImage,setPostImage]=useState(null);
    const[postBody,setPostBody]=useState('');
    
    useEffect(()=>{
        // const user_id=localStorage.getItem('id');
        const url=`http://localhost:8000/api/v1/profileByUserId/${user_id}`
        axios.get(url)
        .then(res=>{
            setUser(res.data);
        })
        .catch(err=>console.log(err))
    },[])

    const uploadPicture = (file,setImage) => {
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
        editPost(id,postBody,postImage);
    }

    const handleDelete=()=>{
        setIsOptionVisible(!isOptionVisible);
        deletePost(id);
    }

    const handleOnChange=(e)=>{
        // console.log('file changed');
        uploadPicture(e.target.files[0],setPostImage);
    }

    const handleLike=()=>{
        const user_id=localStorage.getItem('id');
        const post_id=id;
        const url=`http://localhost:8000/api/v1/deleteLike/${post_id}/${user_id}`;
        axios.get(url)
        .then(res=>{
            setLikes(res.data.data);
        })
        .catch(err=>{
            console.log(err);
        })
        // console.log('liking',user_id,post_id);
    }

    return (
        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img src={user.profile_image_url} alt="" className="postProfileImage" />
                        <span className="postUserName">{user.user_name}</span>
                        {/* <span className="postDate">{date}</span> */}
                    </div>
                    <div className="postTopRight">
                      {(user_id==localStorage.getItem('id'))?<MoreVert onClick={handleOptionVisible} />:""} 
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
                    <p className={(!image)?`postText`:``}>{body}</p>
                    <img className="postImage" src={image} alt="" />
                    {
                        isEditSectionVisible &&

                            <form onSubmit={handleUpdate} className="postEdit">
                                <div className="postEditElement">
                                    <textarea onChange={(e)=>setPostBody(e.target.value)} name="" id="" defaultValue={body} cols="30" rows="5" ></textarea>
                                </div>
                                <div className="postEditElement">
                                    <label htmlFor="postImage" className="shareOption">
                                    <PermMedia className="shareIcon"/>
                                    <span className="shareOptionText">Photo</span>
                                    <input
                                        style={{display:"none"}}
                                        type="file"
                                        id="postImage"
                                        accept=".png,.jpeg,.jpg"
                                        onChange={handleOnChange}
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
                        <img onClick={handleLike} className="postLikeIcon" src="/Assets/like.png" alt="" />
                        {/* <img className="postLikeIcon" src="/Assets/heart.png" alt="" /> */}
                        <span className="postLikeCounter"> {likes.length} people liked it!</span>
                    </div>
                    <div className="postBottomRight">
                        <span onClick={()=>{setIsCommentVisible(!isCommentVisible)}} className="postCommentText">{commentsNo} comments</span>
                    </div>
                </div>
                {
                    isCommentVisible && <Comment setCommentsNo={setCommentsNo} id={id}/>
                }
            </div>
        </div>
    );
};

export default Post;