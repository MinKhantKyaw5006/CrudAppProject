import React from 'react';
import './PostShare.css';
import Profile from '../../img/profile.jfif'
import { UilScenery, UilSchedule, UilPlayCircle, UilLocationPoint } from "@iconscout/react-unicons";

function PostShare() {
    return (
        <div className='PostShare'>
            <img src={Profile} alt="" />

            <div>
                <input type="text" placeholder="What's happening" />
                <div className='PostChoice'>
                    <div className="option">
                        <UilScenery />
                        Photo
                    </div>

                    <div className="option">
                        <UilPlayCircle />
                        video
                    </div>

                    <div className="option">
                        <UilLocationPoint />
                        Location
                    </div>

                    <div className="option">
                        <UilSchedule />
                        Schedule
                    </div>

                </div>
            </div>


        </div>

    );
}

export default PostShare;
