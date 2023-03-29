import React from 'react';
import cover from '../../img/cover.jfif'
import profile from '../../img/profile.jfif'
import { Link } from 'react-router-dom';
import uiline from '../../img/lineui.png'
import './ProfileUI.css';
import { useSelector } from 'react-redux';
function ProfileUI() {
    const { user } = useSelector((state) => state.authReducer.authData)
    const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER

    const ProfilePage = false;


    return (
        <div className="ProfileCard">
            <div className="ProfileImages">
                <img src={user.coverPicture ? serverPublic + user.coverPicture : serverPublic + "defaultCover.jpg"} alt="" />
                <img src={user.profilePicture ? serverPublic + user.profilePicture : serverPublic + "defaultProfile.png"} alt="" />


            </div>
            <div className="ProfileName">
                <span>{user.firstname} {user.lastname}</span>
                <span>{user.workAt ? user.workAt : "Write about your info"}</span>
            </div>

            <div className='followStatus'>
                {/*image line ui */}
                <img src={uiline} alt="" />
                <div>
                    <div className='follow'>
                        <span>{user.following.length}</span>
                        <span>Followings</span>

                    </div>

                    <div className='vl'></div>
                    <div className='follow'>
                        <span>{user.followers.length}</span>
                        <span>Followers</span>

                    </div>
                    {ProfilePage && (
                        <>
                            <div className="vl">

                            </div>
                            <div className="follow">
                                <span>3</span>
                                <span>Posts</span>

                            </div>
                        </>
                    )}
                </div>
                <img src={uiline} alt="" />
            </div>
            {ProfilePage ? "" :
                <span>
                    <Link style={{textDecoration: "none", color: "inherit"}} to={`/profile/${user._id}`} >
                        My Profile
                    </Link>
                </span>}


        </div>
    );
}

export default ProfileUI;