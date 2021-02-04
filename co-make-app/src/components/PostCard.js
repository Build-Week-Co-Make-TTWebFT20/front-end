import React, { useState } from 'react'
import { axiosWithAuth } from '../helpers/axiosWithAuth'
import { useHistory } from 'react-router-dom';

function PostCard(props) {
    const { post_name, description, city, abr_state, zip, score, id } = props.post;
    const [scoreValue, setScoreValue] = useState(score);
    const { push } = useHistory();

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
                <p onClick={() => setScoreValue(scoreValue + 1)}>+</p>
                <p>{score}</p>
                <p onClick={() => setScoreValue(scoreValue - 1)}>-</p>
            </div>
            <div>
                <button onClick={() => push(`/api/posts/${id}`)} >Edit</button>
                <button onClick={deletePost}>Delete</button>
            </div>
        </div>
    )
}

export default PostCard