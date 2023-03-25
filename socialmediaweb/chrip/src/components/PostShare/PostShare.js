import React, { useState, useRef } from 'react';
import './PostShare.css';
import Profile from '../../img/profile.jfif'
import { UilScenery, UilSchedule, UilPlayCircle, UilLocationPoint } from "@iconscout/react-unicons";

function PostShare() {
    /*use use state and useref for mananging files , images. image and set image const delcared */
    const [image, setImage] = useState(null)
    const imageRef = useRef()


    return (
        <div className='PostShare'>
            <img src={Profile} alt="" />

            <div>
                <input type="text" placeholder="What's happening" />
                <div className='PostChoice'>
                    {/*photo input */}
                    <div className="option" style={{ color: "var(--photo)" }}>
                        <UilScenery />
                        Photo
                    </div>

                    {/*video input */}
                    <div className="option" style={{ color: "var(--video)" }}>
                        <UilPlayCircle />
                        video
                    </div>

                    {/*location input */}
                    <div className="option" style={{ color: "var(--location)" }}>
                        <UilLocationPoint />
                        Location
                    </div>

                    {/*schedule input */}
                    <div className="option" style={{ color: "var(--shedule)" }}>
                        <UilSchedule />
                        Schedule
                    </div>

                    <button className="button ps-button">Share</button>

                    {/*give input for importing image */}
                    <div style={{display: "none"}}>
                        <input type="file" name="myImage" ref={imageRef} />
                    </div>

                </div>
            </div>


        </div>

    );
}

export default PostShare;
