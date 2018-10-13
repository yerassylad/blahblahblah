import { RECEIVE_LOGIN } from "../actions/actionTypes";

const localStoreMiddleware = store => next => action => {
  if (action.type === RECEIVE_LOGIN) {
    console.log("u_data", action.response);
    localStorage.setItem("userData", action.response.sid);
  }
  next(action);
};

export default localStoreMiddleware;
