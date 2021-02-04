import React, { useEffect, useState } from 'react'
import { axiosWithAuth } from '../helpers/axiosWithAuth'
import { useHistory } from 'react-router-dom';


function PostCard(props) {
    const { post_name, description, city, abr_state, zip, score, id } = props.post;
    const { push } = useHistory();

    useEffect(() => {

    }, [])

    const deletePost = ((e) => {
        e.preventDefault();
        axiosWithAuth()
            .delete(`https://comake-tt-webft-20.herokuapp.com/api/posts/${id}`)
            .then((res) => {
                console.log(res.data);
            })
            .catch((err) => {
                console.log(err);
            })
    })

    const votingUp = (() => {
        const up = { direction: 1 }
        axiosWithAuth()
            .post(`https://comake-tt-webft-20.herokuapp.com/api/votes/${id}`, up)
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
            })
    })

    const votingDown = (() => {
        const down = { direction: -1 }
        axiosWithAuth()
            .post(`https://comake-tt-webft-20.herokuapp.com/api/votes/${id}`, down)
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
            })
    })

    return (
        <div className='post-card'>
            <h2>{post_name}</h2>
            <div>
                <h3>Description : </h3>
                <p>{description}</p>
            </div>
            <div>
                <h4>City : {city}</h4>
                <h4>State : {abr_state}</h4>
                <h4>Zip : {zip}</h4>
            </div>
            <div>
                <button onClick={votingUp}>+</button>
                <div>{score}</div>
                <button onClick={votingDown}>-</button>
            </div>
            <div>
                <button onClick={() => push(`/api/posts/${id}`)} >Edit</button>
                <button onClick={deletePost}>Delete</button>
            </div>
        </div>
    )
}

export default PostCard