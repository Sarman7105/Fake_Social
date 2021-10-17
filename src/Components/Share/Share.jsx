import React from 'react';
import './Share.scss';
import {PermMedia} from '@material-ui/icons';

const Share = () => {
    return (
        <div className="share">
            <div className="shareWrapper">
                <div className="shareTop">
                    <img src="/Assets/person/1.jpeg" alt="" className="shareProfileImage" />
                    <input  type="text" placeholder="What's on your mind" className="shareInput" />
                </div>
                <hr className="shareHr" />
                <div className="shareBottom">
                    <div className="shareOptions">
                        <div className="shareOption">
                            <PermMedia className="shareIcon"/>
                            <span className="shareOptionText">Photo/Video</span>
                        </div>
                        
                    </div>
                    <button className="shareButton">Share</button>
                </div>
            </div>
        </div>
    );
};

export default Share;