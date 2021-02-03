import React from 'react'
import PostCard from './PostCard'

function PostsList({ posts }) {
    return (
        <div>
            {
                posts.map(post => {
                    return <PostCard key={post.id} post={post} />
                })
            }
        </div>
    )
}

export default PostsList
