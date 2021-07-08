import React from 'react';
import Post from '../posts/Post';
import Share from '../share/Share';
import { posts } from '../../Data';
import  './Newsfeed.css';

const Newsfeed = () => {
    return (
        <div className="feed">
            <Share/>
            {
                posts.map((val)=>{
                    return(
                        <Post key={val.id} post={val}/>
                    )
                })
            }
           
        </div>
    )
}

export default Newsfeed
