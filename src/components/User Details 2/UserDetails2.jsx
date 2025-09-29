import React, { use, useState } from 'react';
import { Navigate } from 'react-router';

const UserDetails2 = ({userPromise}) => {
    // console.log(userPromise)
    const [visitHome, setVisitHome] = useState(false)
    const {name, username} = use(userPromise);
    // console.log(user)
    if(visitHome){
        return <Navigate to='/'></Navigate>
    }
    return (
        <div>
            <p><small>User name: {username}</small></p>
            <p>Name: {name}</p>
            <button onClick={() => setVisitHome(true)}>visit home</button>
        </div>
    );
};

export default UserDetails2;