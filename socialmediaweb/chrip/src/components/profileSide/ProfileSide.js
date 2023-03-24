import React from 'react';
import './ProfileSide.css';
import Logo from './LogoUse/Logo';
import ProfileUI from './ProfileUI';

import FollowersCard from '../FollowersCard/Followers';


function ProfileSide() {
    return (
        <div className='ProfileSide'>
            <Logo/>
            <ProfileUI/>
            <FollowersCard/>
        </div>
    );
}

export default ProfileSide;
