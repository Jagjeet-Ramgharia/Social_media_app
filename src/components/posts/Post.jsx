import React from 'react';
import {MoreVert} from '@material-ui/icons'
import './Post.css';

const Post = () => {
    return (
        <div className="post">
            <div className="postWrapper">
                <div className="postHeader">
                    <div className="postLeft">
                        <img src="./assets/persons/me2.png" alt="" className="postProfilePic"/>
                        <span className="postUsername">Deja_vu</span>
                        <span className="postDate">10 mins ago</span>
                    </div>
                    <div className="postRight">
                        <MoreVert/>
                    </div>
                </div>
                <div className="postCenter">
                    <span className="postText">Everything is Connected</span>
                    <img src="/assets/posts/1.jpg" alt="" className="postImg"/>
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img src="/assets/like.png" alt="" className="likeOption"/>
                        <img src="/assets/heart.png" alt="" className="likeOption"/>
                        <spna className="postLikeCounter">10 people like it</spna>
                    </div>
                    <div className="postBottomRight">
                        <span className="postComments">10 Comments</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Post
