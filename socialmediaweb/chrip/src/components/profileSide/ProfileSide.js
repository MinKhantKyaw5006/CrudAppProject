import React from 'react';
import './ProfileSide.css';
import Logo from './LogoUse/Logo';
import ProfileUI from './ProfileUI';


function ProfileSide() {
    return (
        <div className='ProfileSide'>
            <Logo/>
            <ProfileUI/>
        </div>
    );
}

export default ProfileSide;
