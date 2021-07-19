import React, { useContext } from 'react';
import Home from './pages/Home';
import './App.css';
import Profile from './pages/profile/Profile';
import Login from './pages/login/Login';
import Register from './pages/registeration/Register';
import {BrowserRouter as Router, Switch,Route, Redirect} from 'react-router-dom'
import { AuthContext } from './context/AuthContext';
import Chat from './pages/chat/Chat';
import UpdateUser from './pages/updateUser/UpdateUser';

function App() {
  const {user} = useContext(AuthContext)
  return (
    <>
    <Router>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/login">
           {user ? <Redirect to="/"/> : <Login/>}
        </Route>
        <Route path="/register">
          <Register/>
        </Route>
        <Route path="/chat">
          {!user ? <Redirect to="/"/>:<Chat/>}
        </Route>
        <Route path="/profile/:username">
          <Profile/>
        </Route>
        <Route path="/updateuser">
          <UpdateUser/>
        </Route>
      </Switch>
    </Router>
    </>
  );
}

export default App;
