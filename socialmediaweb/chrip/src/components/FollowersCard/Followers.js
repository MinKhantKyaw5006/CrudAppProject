import React from 'react';
import './Followers.css';
import { Followersinfo } from '../../Data/FollowersData';

function FollowersCard() {
    return (
        <div className='FollowerCard'>

            <h3>Who is following you</h3>

            {Followersinfo.map((follower, id) => {
                return (
                    <div className='follower'>
                        <div>
                            <img src={follower.img} alt="" className='followerprofile' />
                            <div className='name'>
                                <span>{follower.name}</span>
                                <span>@{follower.username}</span>

                            </div>
                        </div>
                        <button className='button fc-button'>Follow</button>

                    </div>
                )
            })}



        </div>

    )
}

export default FollowersCard;