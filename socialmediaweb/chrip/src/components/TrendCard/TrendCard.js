import React from 'react';
import './TrendCard.css';
import { TrendData } from '../../Data/TrendsData';
function TrendCard() {
    return (
        <div className="TrendCard">
            <h3>
                Trends For You
            </h3>
            {TrendData.map((trend,id) => {
                return (
                    <div className="trend" key={id}>
                        <span>#{trend.name}</span>
                        <span>{trend.shares}k shares</span>
                    </div>
                )
            })}

        </div>
    );
}

export default TrendCard;
