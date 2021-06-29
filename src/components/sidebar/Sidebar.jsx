import React from 'react';
import {RssFeed} from '@material-ui/icons';
import './Sidebar.css';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                    <RssFeed className="sidebarIcon"/>
                    <span className="sidebarListItemText">Feed</span>
                    </li>
                    <li className="sidebarListItem">
                    <RssFeed className="sidebarIcon"/>
                    <span className="sidebarListItemText">Feed</span>
                    </li>
                    <li className="sidebarListItem">
                    <RssFeed className="sidebarIcon"/>
                    <span className="sidebarListItemText">Feed</span>
                    </li>
                    <li className="sidebarListItem">
                    <RssFeed className="sidebarIcon"/>
                    <span className="sidebarListItemText">Feed</span>
                    </li>
                    <li className="sidebarListItem">
                    <RssFeed className="sidebarIcon"/>
                    <span className="sidebarListItemText">Feed</span>
                    </li>
                    <li className="sidebarListItem">
                    <RssFeed className="sidebarIcon"/>
                    <span className="sidebarListItemText">Feed</span>
                    </li>
                    <li className="sidebarListItem">
                    <RssFeed className="sidebarIcon"/>
                    <span className="sidebarListItemText">Feed</span>
                    </li>
                    <li className="sidebarListItem">
                    <RssFeed className="sidebarIcon"/>
                    <span className="sidebarListItemText">Feed</span>
                    </li>
                </ul>
                <button className="sidebarButton">Show More</button>
                <hr className="sidebarHr"/>
                <ul className="sidebarFriendList">
                    <li className="sidebarFriend">
                        <img src="./assets/persons/me2.png" alt="" className="sidebarFriendImg"/>
                        <span className="sidebarFriendName">Deja_vu</span>
                    </li>
                    <li className="sidebarFriend">
                        <img src="./assets/persons/me2.png" alt="" className="sidebarFriendImg"/>
                        <span className="sidebarFriendName">Deja_vu</span>
                    </li>
                    <li className="sidebarFriend">
                        <img src="./assets/persons/me2.png" alt="" className="sidebarFriendImg"/>
                        <span className="sidebarFriendName">Deja_vu</span>
                    </li>
                    <li className="sidebarFriend">
                        <img src="./assets/persons/me2.png" alt="" className="sidebarFriendImg"/>
                        <span className="sidebarFriendName">Deja_vu</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Sidebar
