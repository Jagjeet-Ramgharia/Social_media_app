import { PermMedia, Label, Room, EmojiEmotions } from '@material-ui/icons';
import axios from '../../axios';
import React, { useContext, useRef, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';
import './share.css';

const Share = () => {
    const {user} = useContext(AuthContext);
    const[file,setFile] = useState();
    const desc = useRef()
    const submitHandler = async (e) =>{
        e.preventDefault()
        const newPost = {
            userId: user._id,
            desc : desc.current.value
        }
        if(file){
            const data = new FormData();
            const filename = file.name;
            data.append("file",file);
            data.append("name",filename);
            newPost.img = filename;
            try{
                await axios.post("/upload", data)
            }catch(err){
                console.log(err)
            }
        }
        try{
            await axios.post('/posts',newPost)
            window.location.reload()
        }catch(e){
            console.log(e)
        }
    }
    return (
        <div className="share">
            <div className="shareWrapper">
                <div className="shareTop">
                    <img src={user.profilePicture ? user.profilePicture : "/assets/man.png"} alt="feed_img" className="shareProfilePic"/>
                    <input type="text" ref={desc} placeholder={`What's in your mind ${user.username} ?` } className="shareInput"/>
                </div>
                <hr className="shareHr"/>
                <form className="shareBottom" onSubmit={submitHandler}>
                    <div className="shareOptions">
                        <label htmlFor="file" className="shareOption">
                            <PermMedia htmlColor="tomato" className="shareIcon"/>
                            <span className="shareOptionText">Photo or Video</span>
                            <input style={{display:"none"}} type="file" id="file" accept=".png,.jpeg,.jpg" onChange={(e)=>setFile(e.target.files[0])}/>
                        </label>
                        <div className="shareOption">
                            <Label htmlColor="blue" className="shareIcon"/>
                            <span className="shareOptionText">Tag</span>
                        </div>
                        <div className="shareOption">
                            <Room htmlColor="green" className="shareIcon"/>
                            <span className="shareOptionText">Location</span>
                        </div>
                        <div className="shareOption">
                            <EmojiEmotions htmlColor="goldenrod" className="shareIcon"/>
                            <span className="shareOptionText">Emote</span>
                        </div>
                    </div>
                    <button type="submit" className="shareButton">Share</button>
                </form>
            </div>
        </div>
    )
}

export default Share
