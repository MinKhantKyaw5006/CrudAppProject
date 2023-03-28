import React from 'react';
import './Post.css';
import Comment from '../../img/comment.png'
import Share from '../../img/send.png'
import Heart from '../../img/heartfill.png'
import NotHeart from '../../img/heartempty.png'
import { useSelector } from 'react-redux';

function Post({data}) {
  const {user} = useSelector((state)=> state.authReducer.authData)
  return (
   <div className="Post">
    <img src={data.image? process.env.REACT_APP_PUBLIC_FOLDER + data.image:""} alt="" />

    {/*this will be reaction division with icons of 3*/}

    <div className="postReacts">
        <img src={data.liked?Heart: NotHeart} alt="" />
        <img src={Comment} alt="" />
        <img src={Share} alt="" />

    </div>

    <span style={{color: "var(--gray)", fontSize: '12px'}}>{data.likes}Likes</span>
    <div className="detail">
        <span><b>{data.name}</b></span>
        <span>{data.desc}</span>
    </div>

   </div>
  );
}

export default Post;
