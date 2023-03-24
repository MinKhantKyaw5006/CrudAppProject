import React from 'react';
import cover from '../../img/cover.jfif'
import profile from '../../img/profile.jfif'
import potrait from '../../img/potrait.jfif'
import uiline from '../../img/lineui.png'
import './ProfileUI.css';
function ProfileUI() {
    return (
        <div className="ProfileCard">
            <div className="ProfileImages">
                <img src={cover} alt="" />
                <img src={profile} alt="" />


            </div>
            <div className="ProfileName">
                <span>Min Khant Kyaw 6410935</span>
                <span>Junior Web developer</span>
            </div>

            <div className='followStatus'>
                {/*image line ui */}
                <img src={uiline} alt="" />
                <div>
                    <div className='follow'>
                        <span>6,410,935</span>
                        <span>Followings</span>

                    </div>

                    <div className='vl'></div>
                    <div className='follow'>
                        <span>1</span>
                        <span>Followers</span>

                    </div>



                </div>
                <img src={uiline} alt="" />
            </div>
            <span>My Profile</span>
        </div>
    );
}

export default ProfileUI;