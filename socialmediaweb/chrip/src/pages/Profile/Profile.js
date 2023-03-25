import React from 'react';
import PostSide from '../../components/postSide/PostSide';
import ProfileLeft from '../../components/ProfileLeft/ProfileLeft';
import ProfileUI from '../../components/profileSide/ProfileUI';
import RightSide from '../../components/RightSide/RightSide';
import './Profile.css';

function Profile() {
  return (
    <div className="Profile">
      <ProfileLeft />
      <div className="Profile-center">
        <div className="profile-ui-container">
          <div className='spare1'></div>
          <ProfileUI />
          <div className='spare2'></div>
        </div>

        <PostSide />
      </div>
      <RightSide/>
    </div>
  );
}

export default Profile;
