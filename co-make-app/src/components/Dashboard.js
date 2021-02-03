import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { axiosWithAuth } from '../helpers/axiosWithAuth'
import AddIssue from './AddIssue';
import PostsList from './PostsList';

function Dashboard() {
    const [postsList, setPostsList] = useState([]);

    const getPostsList = () => {
        axios
            .get('https://comake-tt-webft-20.herokuapp.com/api/posts')
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
            <AddIssue />
            <PostsList posts={postsList} />
        </div>
    )
}

export default Dashboard
