import React from 'react';
import './InfoCard.css';
import {UilPen} from '@iconscout/react-unicons';

function InfoCard() {
  return (
    <div className="InfoCard">
        <div className="infohead">
            <h4>Your Info</h4>
            <div>
            <UilPen width='2rem' height='1.2rem'/>

            </div>
            
        </div>
        <div className="info">
            <span>
                <b>Status </b>
            </span>
            <span>relationship</span>
        </div>

        <div className="info">
            <span>
                <b>Lives in </b>
            </span>
            <span>Thailand</span>
        </div>

        <div className="info">
            <span>
                <b>Works at </b>
            </span>
            <span>ABAC University</span>
        </div>
        <button className="button logout-button">Logout</button>
    </div>
  );
}

export default InfoCard;
