import React from 'react';
import {Chat, Person, Search, Notifications} from '@material-ui/icons';
import './Topbar.css';

const Topbar = () => {
    return (
        <div className="topBarContainer">
            <div className="topbarLeft">
                <span className="logo">Meet Up</span>
            </div>
            <div className="topbarCenter">
                <div className="searchBar">
                    <Search className="searchIcon"/>
                    <input placeholder="Search for friends, posts or videos" className="searchInput"/>
                </div>
            </div>
            <div className="topbarRight">
                <div className="topbarLinks">
                    <span className="topbarLink">HomePage</span>
                    <span className="topbarLink">TimeLine</span>
                </div>
                <div className="topbarIcons">
                    <div className="topbarIconItems">
                        <Person/>
                        <span className="topbarIconBadge">1</span>
                    </div>
                    <div className="topbarIconItems">
                        <Chat/>
                        <span className="topbarIconBadge">1</span>
                    </div>
                    <div className="topbarIconItems">
                        <Notifications/>
                        <span className="topbarIconBadge">1</span>
                    </div>
                </div>
                <img src="./assets/persons/me2.png" alt="" className="topbarImg"/>
            </div>
        </div>
    )
}

export default Topbar
