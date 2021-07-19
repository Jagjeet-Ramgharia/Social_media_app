import React from 'react'
import {format} from 'timeago.js'
import './Message.css'

const Message = ({own, messages}) => {
    return (
        <div className={own ? "message own" : "message"}>
            <div className="message_top">
                <img src="/assets/persons/1.jpg" alt="" className="message_img"/>
                <p className="message_text">{messages?.text}</p>
            </div>
            <div className="message_bottom">
                <p>{format(messages?.createdAt)}</p>
            </div>
        </div>
    )
}

export default Message
