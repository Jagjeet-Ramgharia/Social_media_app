import React from 'react'
import './Message.css'

const Message = ({own}) => {
    return (
        <div className={own ? "message own" : "message"}>
            <div className="message_top">
                <img src="/assets/persons/1.jpg" alt="" className="message_img"/>
                <p className="message_text">hellow from this side</p>
            </div>
            <div className="message_bottom">
                <p>1 hour</p>
            </div>
        </div>
    )
}

export default Message
