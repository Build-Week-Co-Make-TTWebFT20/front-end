import React from 'react'

function PostCard(props) {
    const { post_name, description, city, abr_state, zip, score } = props.post;
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
                <p>+</p>
                <p>{score}</p>
                <p>-</p>
            </div>
            <div>
                <button>Edit</button>
                <button>Delete</button>
            </div>
        </div>
    )
}

export default PostCard