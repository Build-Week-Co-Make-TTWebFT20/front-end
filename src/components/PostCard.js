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
<<<<<<< HEAD:src/components/PostCard.js
        const up = {direction: 1};
=======
        const up = { direction: 1 }
>>>>>>> 9ab74a68298519e845c7462b59f07bb47a9df2aa:co-make-app/src/components/PostCard.js
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
<<<<<<< HEAD:src/components/PostCard.js
        const down = {direction: -1};
=======
        const down = { direction: -1 }
>>>>>>> 9ab74a68298519e845c7462b59f07bb47a9df2aa:co-make-app/src/components/PostCard.js
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