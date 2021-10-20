import React, { useRef, useState } from 'react';
import './Share.scss';
import {PermMedia} from '@material-ui/icons';
import axios from 'axios';

const Share = () => {
    const key="9659c4a5a455e86dd552087fbc881e42";
    const desc=useRef();
    const [file,setFile]=useState(null)
    const url=`https://api.imgbb.com/1/upload`
    const submitHandler=(e)=>{

        const imageData = new FormData();
		imageData.set('key',key);
		imageData.append('image',file);
        console.log("form submitting");
        e.preventDefault();
        try{
            axios.post(url,imageData)
            .then((res)=>{
                const post={
                    body: desc.current.value,
                    image: res.data.data.display_url
                }
                axios.post('http://localhost:8000/api/v1/createPost',post)
                .then(res=>console.log(res))
                .catch(err=>console.log(err));
            })
            .catch((error)=>{
                console.log(error);
            })
        }
        catch(error){
            console.log(error);
        }
    }
    return (
        <div className="share">
            <div className="shareWrapper">
                <div className="shareTop">
                    <img src="/Assets/person/1.jpeg" alt="" className="shareProfileImage" />
                    <input
                        type="text"
                        placeholder="What's on your mind?"
                        className="shareInput"
                        ref={desc} 
                    />
                </div>
                <hr className="shareHr" />
                <form className="shareBottom" onSubmit={submitHandler}>
                    <div className="shareOptions">
                        <label htmlFor="file" className="shareOption">
                            <PermMedia className="shareIcon"/>
                            <span className="shareOptionText">Photo/Video</span>
                            <input
                                style={{display:"none"}}
                                type="file"
                                id="file"
                                accept=".png,.jpeg,.jpg"
                                onChange={(e)=>setFile(e.target.files[0])}
                            />
                        </label>
                        
                    </div>
                    <button className="shareButton" type="submit">Share</button>
                </form>
            </div>
        </div>
    );
};

export default Share;