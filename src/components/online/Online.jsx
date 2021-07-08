import React from "react";
import "./Online.css";

const Online = ({users}) => {
  return (
    <div>
      <li className="rightbarFriend">
        <div className="rightbarProfileImgContainer">
          <img
            src={users.profilepicture}
            alt=""
            className="rightbarProfileImg"
          />
          <span className="rightbarOnline"></span>
        </div>
        <span className="rightbarUsername">{users.username}</span>
      </li>
    </div>
  );
};

export default Online;
