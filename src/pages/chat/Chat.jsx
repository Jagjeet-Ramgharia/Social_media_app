import React, { useContext, useEffect, useRef, useState } from "react";
import "./Chat.css";
import Topbar from "../../components/topbar/Topbar";
import Conversation from "../../components/conversation/Conversation";
import Message from "../../components/messages/Message";
import ChatOnline from "../../components/chatOnline/ChatOnline";
import { AuthContext } from "../../context/AuthContext";
import axios from "../../axios";
import {io} from 'socket.io-client'

const Chat = () => {
  const [conversation, setConversation] = useState([]);
  const [currentChat, setCurrentChat] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage,setNewMessage] = useState('')
  const { user } = useContext(AuthContext);
  const [socket,setSocket] = useState(null)
  const ScrollRef = useRef()

  useEffect(()=>{
    setSocket(io('ws://localhost:8900'))
  },[])


  useEffect(()=>{
    socket?.on("welcome" , message=>{
      console.log(message)
    })
  },[socket])

  // this useeffect will get all conversations
  useEffect(() => {
    const getConversations = async () => {
      try {
        const res = await axios.get("/conversations/" + user._id);
        setConversation(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getConversations();
  }, [user._id]);
  
  // this useeffect will get all conversations
  useEffect(()=>{
    const getMessages = async () =>{
      try{
        const res = await axios.get('/messages/'+ currentChat?._id);
        setMessages(res.data)
      }catch(err){
        console.log(err)
      }
    }
    getMessages()
  },[currentChat])
  
  const handleSubmit = async (e) =>{
    e.preventDefault()
    const message = {
      conversationId : currentChat._id,
      sender : user._id,
      text : newMessage
    }
    try{
      const res =  await axios.post("/messages", message)
      setMessages([...messages, res.data])
      setNewMessage('')
    }catch(err){
      console.log(err)
    }
  }

  useEffect(()=>{
    ScrollRef.current?.scrollIntoView({behavior:"smooth"})
  })
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
            {conversation.map((val) => {
              return (
              <div onClick={() => setCurrentChat(val)}>
              <Conversation conversation={val} currentUser={user} />
              </div>
              )
            })}
          </div>
        </div>
        <div className="chat_box">
          <div className="chat_box_wrapper">
            {currentChat ? (
              <>
                <div className="chat_box_top">

                {messages.map(val =>(
                  <div ref={ScrollRef}>
                  <Message messages = {val} own ={val.sender === user._id} />
                  </div>
                ))}
                  
                </div>
                <div className="chat_box_bottom">
                  <input
                    type="text"
                    placeholder="Type a Message"
                    className="chat_type_message"
                    value={newMessage}
                    onChange={(e)=> setNewMessage(e.target.value)}
                  />
                  <button className="chat_send_btn" onClick={handleSubmit}>Send</button>
                </div>
              </>
            ) : (
              <span className="chat_start_conversation">
                Start a Conversation
              </span>
            )}
          </div>
        </div>
        <div className="chat_online">
          <div className="chat_online_wrapper">
            <ChatOnline />
          </div>
        </div>
      </div>
    </>
  );
};

export default Chat;
