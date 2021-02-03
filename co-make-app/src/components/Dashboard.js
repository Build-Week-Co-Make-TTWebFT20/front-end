import React, { useEffect, useState } from 'react'
import { axiosWithAuth } from '../helpers/axiosWithAuth'
import AddIssue from './AddIssue';
import PostsList from './PostsList';

function Dashboard() {
    const [postsList, setPostsList] = useState([]);

    const getPostsList = () => {
        axiosWithAuth()
            .get('/api/posts')
            .then((res) => {
                console.log(res);
                setPostsList(res.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }

    useEffect(() => {
        getPostsList();
    }, [])

    return (
        <div>
            <AddIssue posts={postsList} setPost={setPostsList} />
            <PostsList posts={postsList} />
        </div>
    )
}

export default Dashboard

