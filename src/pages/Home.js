import React from 'react';
import Topbar from '../components/topbar/Topbar';
import Sidebar from '../components/sidebar/Sidebar';
import Newsfeed from '../components/Newsfeed/Newsfeed';
import Rightbar from '../components/Rightbar/Rightbar';
import './Home.css';
const Home = () => {
    return (
        <>
            <Topbar/>
            <div className="homeContainer">
                <Sidebar/>
                <Newsfeed/>
                <Rightbar/>
            </div>
        </>
    )
}

export default Home
