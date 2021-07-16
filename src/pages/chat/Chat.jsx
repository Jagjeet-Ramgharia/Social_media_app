import React from "react";
import "./Chat.css";
import Topbar from "../../components/topbar/Topbar";
import Conversation from "../../components/conversation/Conversation";
import  Message  from "../../components/messages/Message";
import ChatOnline from "../../components/chatOnline/ChatOnline";

const Chat = () => {
  return (
    <>
      <Topbar />
      <div className="chat_container">
        <div className="chat_menu">
          <div className="chat_menu_wrapper">
            <input
              type="text"
              placeholder="Search for friends"
              className="chat_menu_input"
            />
                <Conversation/>
                <Conversation/>
                <Conversation/>
          </div>
        </div>
        <div className="chat_box">
          <div className="chat_box_wrapper">
              <div className="chat_box_top">
                  <Message/>
                  <Message own={true}/>
                  <Message/>
                  <Message/>
                  <Message own={true}/>
                  <Message/>
                  <Message/>
                  <Message own={true}/>
                  <Message/>
                  <Message/>
                  <Message own={true}/>
                  <Message/>
                  <Message/>
                  <Message own={true}/>
                  <Message/>
              </div>
              <div className="chat_box_bottom">
                  <input type="text" placeholder="Type a Message" className="chat_type_message"/>
                  <button className="chat_send_btn">Send</button>
              </div>
          </div>
        </div>
        <div className="chat_online">
          <div className="chat_online_wrapper">
              <ChatOnline/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Chat;
