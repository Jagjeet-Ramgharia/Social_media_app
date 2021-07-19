import React,{useContext, useEffect} from "react";
import { MoreVert } from "@material-ui/icons";
import "./Post.css";
import { useState } from "react";
import axios from "../../axios";
import {format} from 'timeago.js';
import {Link} from 'react-router-dom';
import { AuthContext } from "../../context/AuthContext";

const Post = ({ post }) => {
  const [like, setLike] = useState(post.likes.length);
  const [isLiked, setIsLiked] = useState(false);
  const [user,setUser] = useState({})
  const {user: currentUser} = useContext(AuthContext)
 
  useEffect(()=>{
    setLike(post.likes.includes(currentUser._id));
  },[currentUser._id,post.likes])
  useEffect(()=>{
    const fetchUser = async() =>{
        const res = await axios.get(`/users?userId=${post.userId}`);
        setUser(res.data)
    }
    fetchUser();
},[post.userId])

  const likeHandler = () =>{
    try{
        axios.put('/posts/'+ post._id +'/like', {userId:currentUser._id})
    }catch(e){
      console.log(e)
    }
      setLike(isLiked ? like-1 : like+1)
      setIsLiked(!isLiked)
  }
   const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postHeader">
          <div className="postLeft">
            <Link to={`profile/${user.username}`}>
            <img
              src={user.profilePicture ? user.profilePicture : "/assets/man.png"}
              alt=""
              className="postProfilePic"
            />
            </Link>
            <span className="postUsername">
              {user.username}
            </span>
            <span className="postDate">{format(post.createdAt)}</span>
          </div>
          <div className="postRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{post.desc}</span>
          <img src={PF + post.img} alt="" className="postImg" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            {/* <img src="/assets/like.png" alt="" className="likeOption" onClick={likeHandler} /> */}
            <img src="/assets/heart.png" alt="" className="likeOption" onClick={likeHandler} />
            <span className="postLikeCounter">{like}</span>
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
