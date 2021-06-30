import React from 'react';
import './Rightbar.css';

const Rightbar = () => {
    return (
        <div className="rightbar">
            <div className="rightbarWrapper">
                <div className="bdayContainer">
                    <img src="/assets/giftbox.png" alt="" className="bdayImg"/>
                    <spna className="bdayText">
                        <b>Deja_vu</b> and <b>3 other friends</b> have birthday today.
                     </spna>
                </div>
                <img src="/assets/download.jpg" alt="" className="adImg"/>
            </div>
        </div>
    )
}

export default Rightbar
