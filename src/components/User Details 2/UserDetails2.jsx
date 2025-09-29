import React, { use } from 'react';

const UserDetails2 = ({userPromise}) => {
    // console.log(userPromise)
    const {name, username} = use(userPromise);
    // console.log(user)
    return (
        <div>
            <p><small>User name: {username}</small></p>
            <p>Name: {name}</p>
        </div>
    );
};

export default UserDetails2;