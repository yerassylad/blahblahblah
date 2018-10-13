import { REQUEST_ORDERS, RECEIVE_ORDERS } from "../actions/actionTypes";

function orders(state = { isFetching: false, items: [] }, action) {
  switch (action.type) {
    case REQUEST_ORDERS:
      return { ...state, isFetching: action.isFetching };
    case RECEIVE_ORDERS:
      return { ...state, isFetching: action.isFetching, items: action.items };
    default:
      return state;
  }
}

export default orders;
