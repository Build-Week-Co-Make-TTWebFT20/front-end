import React, { useEffect, useState } from 'react'
import { axiosWithAuth } from '../helpers/axiosWithAuth'
import AddPost from './AddPost';
import PostsList from './PostsList';

function Dashboard() {
    const [postsList, setPostsList] = useState([]);

    const getPostsList = () => {
        axiosWithAuth()
            .get('/api/posts')
            .then((res) => {
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
            <AddPost posts={postsList} setPostsList={setPostsList} getPostsList={getPostsList} />
            <PostsList posts={postsList} setPostsList={setPostsList} />
        </div>
    )
}

export default Dashboard

