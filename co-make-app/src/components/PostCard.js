import React from 'react'

function PostCard(props) {
    const { name, description, city, state, zip } = props.post;
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
        </div>
    )
}

export default PostCard