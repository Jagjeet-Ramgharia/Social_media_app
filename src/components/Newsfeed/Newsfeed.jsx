import React from 'react';
import Post from '../posts/Post';
import Share from '../share/Share';
import  './Newsfeed.css';

const Newsfeed = () => {
    return (
        <div className="feed">
            <Share/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
        </div>
    )
}

export default Newsfeed
