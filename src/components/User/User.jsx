import React, { Suspense, useState } from 'react';
import { Link } from 'react-router';
import UserDetails2 from '../User Details 2/UserDetails2';

const User = ({user}) => {
    const {name, email, phone,id} = user;
    const [showInfo, setShowInfo] = useState(false)
    const userPromise = fetch(`https://jsonplaceholder.typicode.com/users/${id}`).then(res => res.json())

    const userStyle = {
        border: '2px solid blue',
        borderRadius: '20px',
        margin: '10px',
        padding: '10px'
    }


    return (
        <div style={userStyle}>
            <h3>Name: {name}</h3>
            <p>Email: {email}</p>
            <p>Phone number: {phone}</p>
            <Link to={`/users/${id}`}>Show details</Link>
            <button onClick={() => setShowInfo(!showInfo)}>{showInfo ? 'hide' : 'show'}Info</button>
            {
                showInfo && <Suspense fallback={<span>Loading....</span>}>
                    <UserDetails2 userPromise={userPromise}></UserDetails2>
                </Suspense>
            }
        </div>
    );
};

export default User;