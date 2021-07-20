import React, { useContext } from "react";
import { Chat, Person, Search, Notifications } from "@material-ui/icons";
import { Link } from "react-router-dom";
import "./Topbar.css";
import { AuthContext } from "../../context/AuthContext";

const Topbar = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="topBarContainer">
      <div className="topbarLeft">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">Meet Up</span>
        </Link>
      </div>
      <div className="topbarCenter">
        <div className="searchBar">
          <Search className="searchIcon" />
          <input
            placeholder="Search"
            className="searchInput"
          />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
        <Link to="/" style={{textDecoration:"none", color:"white"}}>
          <span className="topbarLink">HomePage</span>
          </Link>  
          <Link to="/chat" style={{textDecoration:"none", color:"white"}}>
          <span className="topbarLink">Chat</span>
          </Link>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItems">
            <Person />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItems">
            <Chat />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItems">
            <Notifications />
            <span className="topbarIconBadge">1</span>
          </div>
        </div>
        <Link to={`/profile/${user.username}`}>
        <img
          src={user.profilePicture ? user.profilePicture : "/assets/man.png"}
          alt=""
          className="topbarImg"
        />
        </Link>
      </div>
    </div>
  );
};

export default Topbar;
