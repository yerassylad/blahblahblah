import React, { Component } from 'react'

const Post = ({ title, content }) => {
    return (
        <div>
            <h1>{ title }</h1>
            <p>{ content }</p>
        </div>
    )
}

export default Post
