import React, { Component } from 'react'
import { connect } from 'react-redux'
import Post from './Post'

class Posts extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        console.log('posts', this.props.posts)
        const posts = this.props.posts.map(post => <Post key={post.id} {...post} />)
        return (
            <ul>
              {posts}
            </ul>
        )
    }
}

const mapStateToProps = (state) => {
    console.log('mapState', state)
    return { posts: state.posts }
}

export default connect(mapStateToProps)(Posts)
