import axios from "../../axios";
import React, { useContext, useEffect, useState } from "react";
import "./chatonline.css";
import { AuthContext } from "../../context/AuthContext";

const ChatOnline = ({ onlineUsers, currentUserId, setCurrentChat }) => {
  const [Friends, setFriends] = useState([]);
  const [onlineFriends, setOnlineFriends] = useState([]);
  const {user} = useContext(AuthContext)
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  useEffect(() => {
    const getFriends = async () => {
      try {
        const res = await axios.get("/users/friends/" + currentUserId);
        // console.log(res.data)
        setFriends(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getFriends();
  }, [currentUserId]);

  useEffect(() => {
    setOnlineFriends(Friends.filter((f) => onlineUsers.includes(f._id)));
  },[onlineUsers,Friends]);

  const handleClick = async() =>{
    try{
      const res = await axios.get(`/conversations/find/${currentUserId}/${user._id}`)
      setCurrentChat(res.data)
    }catch(err){
      console.log(err)
    }
  }
  return (
    <div className="chat_online">
      {onlineFriends.map((val) => {
        return (
          <>
            <div className="chat_frined" onClick={()=> handleClick(val)}>
              <div className="chat_friend_img">
                <img
                  src={val?.profilePicture ? val?.profilePicture :"/assets/persons/2.jpg"}
                  alt=""
                  className="online_friend_img"
                ></img>
                <div className="friend_badge"></div>
              </div>
              <span className="friend_name">{val?.username}</span>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default ChatOnline;
