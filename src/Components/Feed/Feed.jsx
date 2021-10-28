import React,{useEffect, useState} from 'react';
import './Feed.scss';
import Share from '../../Components/Share/Share';
import Post from '../Post/Post';
import {Posts} from '../../dummyData'
import axios from 'axios';



const Feed = ({profile,user_id}) => {
    // const user_id=localStorage.getItem('id');
    
    const[posts,setPosts]=useState([])
    const userPostsUrl= `http://localhost:8000/api/v1/getPostsById/${user_id}`;
    const allPostsUrl= 'http://localhost:8000/api/v1/getAllPosts';
    const url=profile ? userPostsUrl: allPostsUrl;
    
    const fetchingPost=()=>{
        axios.get(url)
        .then(res=>{
            // console.log(res.data);
            setPosts(res.data);
        })
    }
    useEffect(()=>{
        fetchingPost();
    },[])

    const createPost=(post)=>{
        if((post.body || post.image)){
            axios.post('http://localhost:8000/api/v1/createPost',post)
        .then(res=>{
            console.log(res);
            fetchingPost();
        })
        .catch(err=>console.log(err));
        }
        
    }

    const editPost=(id,body,image)=>{
        console.log(id);
        const url=`http://localhost:8000/api/v1/updatePost/${id}`;
        const post={
            body:body,
            image:image
        }
        axios.post(url,post)
        .then(res=>{
            console.log(res);
            fetchingPost();
        })
        .catch(err=>{
            console.log(err);
        })
    }

    const deletePost=(id)=>{
        const url=`http://localhost:8000/api/v1/deletePost/${id}`;
        axios.get(url)
        .then(res=>{
            console.log(res);
            fetchingPost();
        })
        .catch(err=>{
            console.log(err);
        })
    }

    return (
        <div className="feed">
            <div className="feedWraper">
            <Share createPost={createPost}/>
            {
                posts.map(post=>< Post key={post.id} editPost={editPost} deletePost={deletePost} post={post}/>)      
            }
            
            </div>
        </div>
    );
};

export default Feed;