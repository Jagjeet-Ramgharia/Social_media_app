import React, { useContext, useEffect, useState } from "react";
import Post from "../posts/Post";
import Share from "../share/Share";
import axios from "../../axios";
import "./Newsfeed.css";
import { AuthContext } from "../../context/AuthContext";

const Newsfeed = ({ username }) => {
  const [posts, setPosts] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = username
        ? await axios.get("/posts/profile/" + username)
        : await axios.get("/posts/timeline/" + user._id);
      console.log(res);
      setPosts(
        res.data.sort((p1, p2) => {
          return new Date(p2.createdAt) - new Date(p1.createdAt);
        })
      );
    };
    fetchPosts();
  }, [username, user._id]);
  return (
    <div className="feed">
      {(!username || username === user.username) && <Share />}
      {posts.map((val) => {
        return <Post key={val._id} post={val} />;
      })}
    </div>
  );
};

export default Newsfeed;
