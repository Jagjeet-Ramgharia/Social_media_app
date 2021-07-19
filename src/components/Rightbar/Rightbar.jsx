import axios from "../../axios";
import React, { useContext, useEffect, useState } from "react";
import { Users } from "../../Data";
import Online from "../online/Online";
import "./Rightbar.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { Add, Remove } from "@material-ui/icons";

const Rightbar = ({ user }) => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const [friends, setFriends] = useState([]);
  const { user:CurrentUser,dispatch } = useContext(AuthContext);
  // const [followed,setFollowed] = useState([CurrentUser?.following.includes(user?.id)])

  // useEffect(()=>{
  //   setFollowed(CurrentUser?.following.includes(user?.id));
  // },[CurrentUser,user])

  useEffect(() => {
    const getFriends = async () => {
      try {
        const friendList = await axios.get("/users/friends/" + user._id);
        setFriends(friendList.data);
      } catch (err) {
        console.log(err);
      }
    };
    getFriends();
  }, [user]);

  // const handleClick = async() =>{
  //   try{
  //     if(followed){
  //       await axios.put(`/users/${user._id}/unfollow`, {userId:CurrentUser._id})
  //       dispatch({type:"UNFOLLOW" , payload:user._id})
  //     }else{
  //       await axios.put(`/users/${user._id}/follow`, {userId:CurrentUser._id})
  //       dispatch({type:"FOLLOW" , payload:user._id})
  //     }
  //   }catch(err){
  //     console.log(err)
  //   }
  //   setFollowed(!followed)
  // }



  const HomeRightbar = () => {
    return (
      <>
        <div className="bdayContainer">
          <img src="/assets/giftbox.png" alt="" className="bdayImg" />
          <span className="bdayText">
            <b>Deja_vu</b> and <b>3 other friends</b> have birthday today.
          </span>
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
  const ProfileRightbar = () => {
    return (
      <>
        {/* {user.username !== CurrentUser.username && (
          <button className="rightbarFollowBtn" onClick={handleClick}>
            {followed ? "Unfollow" : "Follow"}
            {followed ? <Remove/> : <Add />}
          </button>
        )} */}
        <h4 className="rightbarTitle">User Information</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">City:</span>
            <span className="rightbarInfoValue">{user.city}</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">from:</span>
            <span className="rightbarInfoValue">{user.from}</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Relationship:</span>
            <span className="rightbarInfoValue">
              {user.relationship === 1
                ? "Single"
                : user.relationship === 2
                ? "In a Relationship"
                : "-"}
            </span>
          </div>
        </div>
        <h4 className="rightbarTitle">Following</h4>
        <div className="userFollowings">
          {friends.map((val) => {
            return (
              <>
                <Link
                  to={"/profile/" + val.username}
                  style={{ textDecoration: "none", color:"black" }}
                >
                  <div className="userFollowing">
                    <img
                      src={
                        val?.profilePicture
                          ? val?.profilePicture
                          : PF + "man.png"
                      }
                      alt=""
                      className="userFollowingImg"
                    />
                    <span className="userFollowingName">{val?.username}</span>
                  </div>
                </Link>
              </>
            );
          })}
        </div>
      </>
    );
  };
  return (
    <div className="rightbar">
      <div className="rightbarWrapper"></div>
      {user ? <ProfileRightbar /> : <HomeRightbar />}
    </div>
  );
};

export default Rightbar;
