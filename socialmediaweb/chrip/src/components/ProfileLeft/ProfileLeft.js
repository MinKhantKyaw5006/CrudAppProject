import React from 'react';
import './ProfileLeft.css';
import InfoCard from '../InfoCard/InfoCard';
import FollowersCard from '../FollowersCard/Followers';
import Logo from '../profileSide/LogoUse/Logo';
function ProfileLeft() {
  return (
    <div className="ProfileLeft">
      <Logo/>
      <InfoCard/>
      <FollowersCard/>
    </div>
  );
}

export default ProfileLeft;
