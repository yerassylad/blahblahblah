import React, { Component } from 'react'
import { addPost } from '../actions/postActions'
import { connect } from 'react-redux'


const AddPost = ({ dispatch }) => {
    let titleInput, textInput
    return(
        <div>
            <form onSubmit = { e => {
                e.preventDefault()
                if(!titleInput.value.trim() || !textInput.value.trim()){
                    return
                }
                dispatch(addPost(titleInput.value, textInput.value))
                titleInput.value = ''
                textInput.value = ''
            }}>
                <input ref={ node => titleInput = node } /> <br />
                <textarea ref={ node => textInput = node }></textarea> <br />
                <button type="submit">
                    Add Post
                </button>
            </form>
        </div>
    );
}

export default connect()(AddPost)
