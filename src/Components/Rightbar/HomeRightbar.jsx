import axios from 'axios';
import React, { useEffect, useState } from 'react';
import User from '../User/User';
import BirthdayContainer from './BirthdayContainer';
import './HomeRightbar'

const HomeRightbar = () => {
    const [users,setUsers]=useState([]);
    useEffect(()=>{
        const url='http://localhost:8000/api/v1/users';
        axios.get(url)
        .then((res)=>{
            console.log(res.data);
            setUsers(res.data);
        })
    },[])
    return (
        <>
            {/* <BirthdayContainer/> */}
            <img src="/Assets/ad.png" alt="" className="rightbarAdd" />
                <h3 className="RightbarTitle"> Users</h3>
                <ul className="rightbarFriendList">
                    {users.map((user)=><User user={user} key={user.id}/>)}
                </ul>
        </>
    );
};

export default HomeRightbar;