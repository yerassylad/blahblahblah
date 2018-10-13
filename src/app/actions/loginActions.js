import fetch from "cross-fetch";
import { REQUEST_LOGIN, RECEIVE_LOGIN } from "./actionTypes";
import { API_URL, LOGIN } from "../utils/constants";

const requestLogin = () => ({
  type: REQUEST_LOGIN,
  isLoginFetching: true
});

const receiveLogin = data => ({
  type: RECEIVE_LOGIN,
  response: data,
  isLoginFetching: false
});

const fetchLogin = (email, password) => {
  return dispatch => {
    dispatch(requestLogin());
    return fetch(API_URL + LOGIN, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: email,
        password: password
      })
    })
      .then(response => response.json())
      .then(data => {
        console.log("login response", data);
        if (data.error === 0) {
          localStorage.setItem("sid", data.sid);
          dispatch(receiveLogin(data));
        }
      });
  };
};
export { fetchLogin };
