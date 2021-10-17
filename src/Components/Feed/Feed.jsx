import React from 'react';
import './Feed.scss';
import Share from '../../Components/Share/Share';
import Post from '../Post/Post';
import {Posts} from '../../dummyData'

const Feed = () => {
    return (
        <div className="feed">
            <div className="feedWraper">
            <Share/>
            {
                Posts.map(post=>< Post key={post.id} post={post}/>)      
            }
            
            </div>
        </div>
    );
};

export default Feed;