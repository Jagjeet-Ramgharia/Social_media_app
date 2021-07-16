import React, { useContext, useRef } from "react";
import "./UpdateUser.css";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import { Button } from "@material-ui/core";
import axios from "../../axios";
import { AuthContext } from "../../context/AuthContext";

const UpdateUser = () => {
  const { user } = useContext(AuthContext);

  const username = useRef();
  const email = useRef();
  const password = useRef();
  const city = useRef();
  const from = useRef();

  const updateUser = async (e) => {
    e.preventDefault();
    const _user_ = {
      username : username.current.value,
      email : email.current.value,
      password : password.current.value,
      city : city.current.value,
      from : from.current.value
    }
    try {
      await axios.patch("/users/" + user._id, _user_);
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <Topbar />
      <div className="UpdateUserContainer">
        <div className="updateuser_left">
          <Sidebar />
        </div>
        <div className="updateuser_right">
          <form className="form_box" onSubmit={updateUser}>
            <input
              type="text"
              ref={username}
              className="UpdateuserInput"
              placeholder="Username"
              autoComplete="off"
              minLength="3"
            />
            <input
              type="email"
              ref={email}
              className="UpdateuserInput"
              placeholder="Email"
              autoComplete="off"
            />
            <input
              type="password"
              ref={password}
              className="UpdateuserInput"
              placeholder="Password"
              autoComplete="off"
            />
            <input
              type="text"
              ref={city}
              className="UpdateuserInput"
              placeholder="City"
              autoComplete="off"
            />

            <input
              type="text"
              ref={from}
              className="UpdateuserInput"
              placeholder="From"
              autoComplete="off"
            />
            <Button type="submit" className="UpdateUserBtn">
              update
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateUser;
