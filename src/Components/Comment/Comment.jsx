import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import "./Comment.scss";
import SingleComment from "./SingleComment";

const Comment = ({ id, setCommentsNo }) => {
  const [index, setIndex] = useState(1);
  const [comments, setComments] = useState([]);
  const commentRef = useRef();
  useEffect(() => {
    fetchComments();
  }, [id]);

  const fetchComments = () => {
    axios
      .get(`http://localhost:8000/api/v1/commentByPostId/${id}`)
      .then((res) => {
        console.log(res.data);
        setCommentsNo(res.data.length);
        setComments(res.data);
      });
  };
  const createComment = (comment) => {

    const url="http://localhost:8000/api/v1/createComment";
    axios.post(url,comment)
    .then(res=>{
        console.log(res);
        fetchComments();
    })
    .catch(err=>console.log(err));

  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const comment = commentRef.current.value;
    commentRef.current.value="";
    if (comment) {
      const data = {
        user_id: 1,
        post_id: id,
        comment: comment,
      };
      createComment(data)
    }
  };

  return (
    <div className="comment">
      <div className="newComment">
        <div className="commentUserImage">
          <img src="/Assets/person/1.jpeg" alt="" />
        </div>
        <form onSubmit={handleSubmit} className="commentForm">
          <input
            autoFocus
            ref={commentRef}
            type="text"
            placeholder="write a comment"
          />
        </form>
      </div>
      <div className="oldComments">
        {comments.map((cmt) => (
          <SingleComment comment={cmt} />
        ))}
      </div>
    </div>
  );
};

export default Comment;
