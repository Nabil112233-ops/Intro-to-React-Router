import React from 'react';
import { useLoaderData, useNavigate } from 'react-router';

const PostDetail = () => {
    const post = useLoaderData()
    const navigate = useNavigate()
    return (
        <div>
            <h3>Post detail after clicking the button</h3>
            <h4>{post.body}</h4>
            <p>{post.title}</p>
            <button onClick={() => navigate(-1)}>Go back</button>
        </div>
    );
};

export default PostDetail;