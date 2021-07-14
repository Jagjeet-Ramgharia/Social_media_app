import React,{useEffect,useState} from "react";
import axios from "../../axios";
import Topbar from "../../components/topbar/Topbar";
import Newsfeed from "../../components/Newsfeed/Newsfeed";
import Rightbar from "../../components/Rightbar/Rightbar";
import Sidebar from "../../components/sidebar/Sidebar";
import "./Profile.css";
import {useParams} from 'react-router';

const Profile = () => {
  const [user,setUser] = useState({})
  const username = useParams().username;

  useEffect(()=>{
    const fetchUser = async() =>{
        const res = await axios.get(`/users?username=${username}`);
        console.log(res.data)
        setUser(res.data)
    }
    fetchUser();
},[username])
  const PF = process.env.REACT_APP_PUBLIC_FOLDER
  return (
    <>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
              <div className="profileCover">
                  <img src={user.coverPicture ? user.coverPicture : PF + "rubik.png" } className="ProfileCoverImg" alt="no_Cover_Image"/>
                  <img src={user.profilePicture ? user.profilePicture : PF + "man.png"} className="ProfileUserImg" alt="no_profile_img"/>
              </div>
              <div className="profileInfo">
                  <h4 className="profileInfoName">{user.username}</h4>
                  <span className="profileInfoDesc">{user.desc}</span>
              </div>
          </div>
          <div className="profileRightBottom">
            <Newsfeed username={username} />
            <Rightbar user={user} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
