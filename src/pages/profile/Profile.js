import React from "react";
import Topbar from "../../components/topbar/Topbar";
import Newsfeed from "../../components/Newsfeed/Newsfeed";
import Rightbar from "../../components/Rightbar/Rightbar";
import Sidebar from "../../components/sidebar/Sidebar";
import "./Profile.css";

const Profile = () => {
  return (
    <>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
              <div className="profileCover">
                  <img src="/assets/posts/1.jpg" className="ProfileCoverImg"/>
                  <img src="/assets/persons/1.jpg" className="ProfileUserImg"/>
              </div>
              <div className="profileInfo">
                  <h4 className="profileInfoName">Scarllet</h4>
                  <span className="profileInfoDesc">Everything is connected</span>
              </div>
          </div>
          <div className="profileRightBottom">
            <Newsfeed />
            <Rightbar profile />
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
