import { REQUEST_LOGIN, RECEIVE_LOGIN } from "../actions/actionTypes";

const loginReducer = (
  state = { isLoginFetching: false, response: {} },
  action
) => {
  console.log("reducer", action);
  switch (action.type) {
    case REQUEST_LOGIN:
      return { ...state, isLoginFetching: action.isLoginFetching };
    case RECEIVE_LOGIN:
      console.log("receiveLogin");
      return {
        ...state,
        isLoginFetching: action.isLoginFetching,
        response: action.response
      };
    default:
      return state;
  }
};

export default loginReducer;
