import React, { useEffect, useState } from 'react';
import './Followers.css';
import { Followersinfo } from '../../Data/FollowersData';
import User from '../User/User';
import { useSelector } from 'react-redux';
import { getAlluser } from '../../api/UserRequest';



function FollowersCard() {

    const [persons, setPersons] = useState([])
    const { user } = useSelector((state) => state.authReducer.authData)

    useEffect(() => {
        const fetchPersons = async () => {
            const { data } = await getAlluser();
            setPersons(data)
            console.log(data)
        }
        fetchPersons()
    }, [])
    return (
        <div className='FollowerCard'>

            <h3>People you may know</h3>

            {persons.map((person, id) => {

                if(person._id !== user._id){
                return (
                    <User person={person} key={id} />

                )
                }
            })}



        </div>

    )
}

export default FollowersCard;
