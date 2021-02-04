import React, { useEffect, useState } from 'react'
import { axiosWithAuth } from '../helpers/axiosWithAuth'
import { useHistory } from 'react-router-dom';


function PostCard(props) {
    const { post_name, description, city, abr_state, zip, score, id, user_direction } = props.post;
    const [scoreValue, setScoreValue] = useState(score);
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
        axiosWithAuth()
            .post(`https://comake-tt-webft-20.herokuapp.com/api/votes/${id}`)
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
            })
    })

    const votingDown = (() => {
        axiosWithAuth()
            .post(`https://comake-tt-webft-20.herokuapp.com/api/votes/${id}`)
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