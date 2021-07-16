import React from "react";
import "./chatonline.css";

const ChatOnline = () => {
  return (
    <div className="chat_online">
      <div className="chat_frined">
        <div className="chat_friend_img">
          <img src="/assets/persons/2.jpg" alt="" className="online_friend_img"></img>
          <div className="friend_badge"></div>
        </div>
        <span className="friend_name">DejaVu</span>
      </div>
    </div>
  );
};

export default ChatOnline;
