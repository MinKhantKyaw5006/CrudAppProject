import React from 'react';
import { useState } from 'react';
import './RightSide.css';
import Homeicon from '../../img/home.png';
import Noti from '../../img/noti.png';
import Comment from '../../img/comment.png';
import Setting from '../../img/setting.png';
import TrendCard from '../TrendCard/TrendCard';
import ShareModal from '../ShareModal/ShareModal';
import { Link } from 'react-router-dom';


function RightSide() {
    const [modalOpened, setModalOpened] = useState(false);

    return (
        <div className="RightSide">
            <div className="navIcons">
                <Link to = '../home'>
                {/* <img src={Homeicon} alt="" /> */}
                <img src={Homeicon} alt="" style={{ width: '25px', height: '25px', borderRadius: '1%', margin: '1px' }} />

                </Link>
                
                <img src={Setting} alt="" />
                <img src={Noti} alt="" />
                <img src={Comment} alt="" />
            </div>
            <TrendCard />
            <button className="button r-button"   onClick={() => setModalOpened(true)}
            type="button"
          >

        
                Share
            </button>
            <ShareModal
            modalOpened={modalOpened}
            setModalOpened={setModalOpened}
          />
        </div>
    );
}

export default RightSide;
