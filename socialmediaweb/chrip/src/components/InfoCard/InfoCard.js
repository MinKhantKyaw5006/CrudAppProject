// import React, { useState } from 'react';
// import './InfoCard.css';
// import {UilPen} from '@iconscout/react-unicons';
// import ProfileModal from '../ProfileModal/ProfileModal';

// function InfoCard() {
//     const [modalOpened,setModalOpened] =useState(false)
//   return (
//     <div className="InfoCard">
//         <div className="infohead">
//             <h4>Your Info</h4>
//             <div>
//             <UilPen width='2rem' height='1.2rem' onClick={()=>
//             setModalOpened(true)}/>

//             <ProfileModal modalOpened={modalOpened}
//             setModalOpened={setModalOpened}/>


//             </div>
            
//         </div>
//         <div className="info">
//             <span>
//                 <b>Status </b>
//             </span>
//             <span>relationship</span>
//         </div>

//         <div className="info">
//             <span>
//                 <b>Lives in </b>
//             </span>
//             <span>Thailand</span>
//         </div>

//         <div className="info">
//             <span>
//                 <b>Works at </b>
//             </span>
//             <span>ABAC University</span>
//         </div>
//         <button className="button logout-button">Logout</button>
//     </div>
//   );
// }

// export default InfoCard;



import React, { useEffect, useState } from 'react';
import './InfoCard.css';
import { UilPen } from '@iconscout/react-unicons';
import ProfileModal from '../ProfileModal/ProfileModal';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import * as UserApi from '../../api/UserRequest'
import { logout } from '../../actions/AuthAction';


function InfoCard() {
  const [modalOpened, setModalOpened] = useState(false);

  const dispatch = useDispatch()
  const params = useParams()
  const profileUserId = params.id
  const [profileUser, setProfileUser] = useState({})

  const {user} = useSelector((state)=>state.authReducer.authData) 

  useEffect(() => {
    const fetchProfileUser = async()=> {
      if(profileUserId === user._id)
      {
        setProfileUser(user)
        // console.log(user)

      }
      else{
        const profileUser = await UserApi.getUser(profileUserId)
        setProfileUser(profileUser)
        // console.log(profileUser)
      }
    }
    fetchProfileUser();
  }, [user])

  const handleLogout =()=> {
    dispatch(logout())
  }
  


  return (
    <div className="InfoCard">
      <div className="infohead">
        <h4>Your Info</h4>
        {user._id === profileUserId? (
               <div>
               <UilPen
                 width="2rem"
                 height="1.2rem"
                 onClick={() => setModalOpened(true)}
                 type="button"
               />
     
               <ProfileModal
                 modalOpened={modalOpened}
                 setModalOpened={setModalOpened}
                 data = {user}
               />
             </div>
        ) : ("")}
   
      </div>
      <div className="info">
        <span>
          <b>Status </b>
        </span>
        <span>{profileUser.relationship}</span>
      </div>

      <div className="info">
        <span>
          <b>Lives in </b>
        </span>
        <span>{profileUser.livesin}</span>
      </div>

      <div className="info">
        <span>
          <b>Works at </b>
        </span>
        <span>{profileUser.worksAt}</span>
      </div>
      <button className="button logout-button" onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default InfoCard;

