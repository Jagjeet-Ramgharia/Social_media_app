import React from "react";

const CloseFriends = ({user}) => {
  return (
    <div>
      <li className="sidebarFriend">
        <img
          src={user.profilepicture}
          alt=""
          className="sidebarFriendImg"
        />
        <span className="sidebarFriendName">{user.username}</span>
      </li>
    </div>
  );
};

export default CloseFriends;
