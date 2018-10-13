import fetch from 'cross-fetch'
import { ADD_POST, REQUEST_POSTS, RECEIVE_POSTS} from './actionTypes'

let id = 0;
const API_URL = 'http://localhost:8000/api/posts/'

const addPost = (title, text) => {
    return dispatch => {
        return fetch(API_URL, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: title,
                content: text
            })
        }).then(response => console.log('response', response.json()))
    }
}

const requestPosts = () => (
    {
        type: REQUEST_POSTS,
        isFetching: true
    }
)

const receivePosts = (posts) => (
    {
        type: RECEIVE_POSTS,
        isFetching: false,
        posts: posts
    }
)

const fetchPosts = () => {
    return dispatch => {
        dispatch(requestPosts())
        return fetch(API_URL)
            .then(response => response.json())
            .then(posts => dispatch(receivePosts(posts)))
    }
}



export { addPost, requestPosts, receivePosts, fetchPosts };
