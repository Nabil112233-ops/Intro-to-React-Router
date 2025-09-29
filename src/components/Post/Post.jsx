import React from 'react';
import { Link, useNavigate } from 'react-router';

const Post = ({post}) => {
    const {id, title} = post;

    let navigate = useNavigate()

    const handleNavigate = () => {
        navigate(`/posts/${id}`)
    }

    return (
        <div style={{border: '2px solid green'}}>
            <h3>{title}</h3>
            <Link to={`/posts/${id}`}>
                <button>Show more</button>
            </Link>
            <button onClick={handleNavigate}>More Details</button>
        </div>
    );
};

export default Post;