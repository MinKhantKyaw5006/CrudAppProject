import React from 'react';
import './ProfileSide.css';
import Logo from './LogoUse/Logo';
import ProfileUI from './ProfileUI';
import Followers from '../FollowersCard/Followers';


function ProfileSide() {
    return (
        <div className='ProfileSide'>
            <Logo/>
            <ProfileUI/>
            <Followers/>
        </div>
    );
}

export default ProfileSide;
