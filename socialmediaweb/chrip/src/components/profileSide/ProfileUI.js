import React from 'react';
import cover from '../../img/cover.jfif'
import profile from '../../img/profile.jfif'
import potrait from '../../img/potrait.jfif'
import './ProfileUI.css';
function ProfileUI() {
  return (
    <div className="ProfileCard">
        <div className="ProfileImages">
            <img src={cover} alt= ""/>
            <img src={profile} alt= ""/>
            

        </div>
        <div className="ProfileName">
            <span>Lucas Antonio</span>
            <span>Junior Web developer</span>
        </div>

    </div>
  );
}

export default ProfileUI;