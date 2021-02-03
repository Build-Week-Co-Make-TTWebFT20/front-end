import React, { useState } from 'react'

function PostCard(props) {
    const { name, description, city, state, zip } = props.post;
    const [voteValue, setVoteValue] = useState(0);
    return (
        <div className='post-card'>
            <h2>{name}</h2>
            <div>
                <h3>Description : </h3>
                <p>{description}</p>
            </div>
            <div>
                <h4>City : {city}</h4>
                <h4>State : {state}</h4>
                <h4>Zip : {zip}</h4>
            </div>
            <div>
                <p>+</p>
                <p>{voteValue}</p>
                <p>-</p>
            </div>
        </div>
    )
}

export default PostCard