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
import Footer from './components/footer/Footer';

function App() {
  const {user} = useContext(AuthContext)
  return (
    <div className="app">
    <Router>
      <Switch>
        <Route exact path="/">
          {user ? <Home/> : <Login/>}
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
    {user ? <Footer/> : null}
    </div>
  );
}

export default App;
