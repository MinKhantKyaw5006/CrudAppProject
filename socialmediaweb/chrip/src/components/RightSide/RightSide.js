import React from 'react';
import './RightSide.css';
import Homeicon from '../../img/home.png';
import Noti from '../../img/noti.png';
import Comment from '../../img/comment.png';
import Setting from '../../img/setting.png';
import TrendCard from '../TrendCard/TrendCard';

function RightSide() {
    return (
        <div className="RightSide">
            <div className="navIcons">
                <img src={Homeicon} alt="" />
                <img src={Setting} alt="" />
                <img src={Noti} alt="" />
                <img src={Comment} alt="" />
            </div>
            <TrendCard />
            <button className="button r-button">
                Share
            </button>
        </div>
    );
}

export default RightSide;
