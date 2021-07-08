import React from "react";
import { MoreVert } from "@material-ui/icons";
import { posts, Users } from "../../Data";
import "./Post.css";
import { useState } from "react";

const Post = ({ post }) => {
  const [like, setLike] = useState(post.like);
  const [isLiked, setIsLiked] = useState(false);

  const likeHandler = () =>{
      setLike(isLiked ? like-1 : like+1)
      setIsLiked(!isLiked)
  }
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postHeader">
          <div className="postLeft">
            <img
              src={Users.filter((u) => u.id === post?.userId)[0].profilepicture}
              alt=""
              className="postProfilePic"
            />
            <span className="postUsername">
              {Users.filter((u) => u.id === post?.userId)[0].username}
            </span>
            <span className="postDate">{post.Date}</span>
          </div>
          <div className="postRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{post.desc}</span>
          <img src={post?.photo} alt="" className="postImg" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            {/* <img src="/assets/like.png" alt="" className="likeOption" onClick={likeHandler} /> */}
            <img src="/assets/heart.png" alt="" className="likeOption" onClick={likeHandler} />
            <spna className="postLikeCounter">{like}</spna>
          </div>
          <div className="postBottomRight">
            <span className="postComments">{post.comments}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
