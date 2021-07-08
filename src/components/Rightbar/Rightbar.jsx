import React from "react";
import { Users } from "../../Data";
import Online from "../online/Online";
import "./Rightbar.css";

const Rightbar = ({ profile }) => {
  const HomeRightbar = () => {
    return (
      <>
        <div className="bdayContainer">
          <img src="/assets/giftbox.png" alt="" className="bdayImg" />
          <spna className="bdayText">
            <b>Deja_vu</b> and <b>3 other friends</b> have birthday today.
          </spna>
        </div>
        <img src="/assets/download.jpg" alt="" className="adImg" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
          {Users.map((u) => {
            return <Online key={u.id} users={u} />;
          })}
        </ul>
      </>
    );
  };
  const ProfileRightbar = () =>{
    return(
      <>
        <h4 className="rightbarTitle">User Information</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">City:</span>
            <span className="rightbarInfoValue">Ludhiana</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">City:</span>
            <span className="rightbarInfoValue">Ludhiana</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">City:</span>
            <span className="rightbarInfoValue">Ludhiana</span>
          </div> 
        </div>
        <h4 className="rightbarTitle">Following</h4>
        <div className="userFollowings">
          <div className="userFollowing">
            <img src="/assets/persons/2.jpg" alt="" className="userFollowingImg"/>
            <span className="userFollowingName">Penny</span>
          </div>
          <div className="userFollowing">
            <img src="/assets/persons/2.jpg" alt="" className="userFollowingImg"/>
            <span className="userFollowingName">Penny</span>
          </div>
        </div>
      </>
    )
  }
  return (
    <div className="rightbar">
      <div className="rightbarWrapper"></div>
       {profile ? <ProfileRightbar/> : <HomeRightbar/>}
    </div>
  );
};

export default Rightbar;
