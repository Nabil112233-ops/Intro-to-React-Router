import React, { use } from 'react';

const Users2 = ({usersPromise}) => {
    const users2 = use(usersPromise)
    console.log('users 2 data load',users2)
    return (
        <div>
            <h2>This is user 2</h2>
        </div>
    );
};

export default Users2;