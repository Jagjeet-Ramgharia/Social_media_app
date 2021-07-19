import axios from '../../axios';
import React, { useEffect } from 'react'
import { useState } from 'react'
import './Conversation.css'

const Conversation = ({conversation,currentUser}) => {
    const [user,setUser] = useState(null);
    const PF = process.env.REACT_APP_PUBLIC_FOLDER

    useEffect(()=>{
        const friendId = conversation.members.find((m)=> m !== currentUser._id);

        const getUser = async () =>{
            try{
                const res = await axios.get('/users?userId='+ friendId)
                setUser(res.data)
            }catch(err){
                console.log(err)
            }
        }
        getUser()
    },[conversation,currentUser])
    return (
        <div className="conversation">
            <img src={user?.profilePicture ? user?.profilePicture : PF + "man.png"} alt="" className="con_img"/>
            <span className="con_name">{user?.username}</span>
        </div>
    )
}

export default Conversation
