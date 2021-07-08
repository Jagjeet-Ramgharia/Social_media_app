import React from "react";
import {
  RssFeed,
  Chat,
  PlayCircleFilled,
  People,
  Bookmark,
  Help,
  Today,
} from "@material-ui/icons";
import {Button} from "@material-ui/core";
import { Users } from "../../Data";
import CloseFriends from "../closeFriends/CloseFriends";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <RssFeed className="sidebarIcon" />
            <span className="sidebarListItemText">Feed</span>
          </li>
          <li className="sidebarListItem">
            <Chat className="sidebarIcon" />
            <span className="sidebarListItemText">Chat</span>
          </li>
          <li className="sidebarListItem">
            <PlayCircleFilled className="sidebarIcon" />
            <span className="sidebarListItemText">Videos</span>
          </li>
          <li className="sidebarListItem">
            <People className="sidebarIcon" />
            <span className="sidebarListItemText">Groups</span>
          </li>
          <li className="sidebarListItem">
            <Bookmark className="sidebarIcon" />
            <span className="sidebarListItemText">Bookmarks</span>
          </li>
          <li className="sidebarListItem">
            <Help className="sidebarIcon" />
            <span className="sidebarListItemText">Questions</span>
          </li>
          <li className="sidebarListItem">
            <Today className="sidebarIcon" />
            <span className="sidebarListItemText">Events</span>
          </li>
          <li className="sidebarListItem">
            <RssFeed className="sidebarIcon" />
            <span className="sidebarListItemText">Courses</span>
          </li>
        </ul>
        <Button className="sidebarButton">Show More</Button>
        <hr className="sidebarHr" />
        <ul className="sidebarFriendList">
            {
                Users.map((u)=>{
                    return(
                        <CloseFriends key={u.id} user={u}/>
                    )
                })
            }
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
