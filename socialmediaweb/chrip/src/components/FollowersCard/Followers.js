import React from 'react';
import './Followers.css';
import { Followersinfo } from '../../Data/FollowersData';

function FollowersCard() {
  return (
   <div className='FollowerCard'>

    <h3>Who is following you</h3>

    {Followersinfo.map((follower,id)=>{
        return ( 
            <div className='follower'>
                testing

            </div>
        )
    })}

  

   </div>

  )
}

export default FollowersCard;
