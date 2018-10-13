import { ADD_POST, REQUEST_POSTS, RECEIVE_POSTS } from "../actions/actionTypes";

const postReducer = (state = { isFetching: false, posts: [] }, action) => {
  switch (action.type) {
    case ADD_POST:
      const posts = [
        ...state.posts,
        { id: action.id, text: action.text, title: action.title }
      ];
      let newState = { ...state, posts: posts };
      return newState;
    case REQUEST_POSTS:
      return { ...state, isFetching: action.isFetching };
    case RECEIVE_POSTS:
      console.log("receivePosts");
      return { ...state, posts: action.posts };
    default:
      return state;
  }
};

export default postReducer;
