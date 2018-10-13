import React, { Component } from "react";
import { fetchLogin } from "../actions/loginActions";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

class Login extends Component {
  handleChange() {
    console.log("change");
  }

  render() {
    const { response, dispatch } = this.props;
    var errorPass = false,
      errorLogin = false;
    var err_passwordText = "",
      err_loginText = "";
    if (response && response.error === 0) {
      localStorage.setItem("isLogged", true);
      return <Redirect to="/" />;
    } else {
      if (response.error === 2) {
        errorPass = true;
        err_passwordText = "Неверный пароль!";
      } else if (response.error === 5) {
        errorLogin = true;
        err_loginText = "Такого пользователя нет!";
      } else if (response.error === 4) {
        errorLogin = true;
        err_loginText = "Неверный формат email!";
      }
    }

    const inputProps = { minLength: "5", maxLength: "30" };
    const margins = {
      marginTop: "40px",
      position: "absolute",
      marginLeft: "50%",
      transform: "translateX(-50%)"
    };
    return (
      <div className="flex-div">
        <form
          className="m-auto"
          style={{ position: "relative" }}
          onSubmit={e => {
            e.preventDefault();
            dispatch(fetchLogin(this.login.value, this.password.value));
          }}
        >
          <TextField
            name="email"
            onChange={this.handleChange}
            error={errorLogin}
            helperText={err_loginText}
            inputRef={node => (this.login = node)}
            required
            label="Email"
            type="email"
          />{" "}
          <br />
          <TextField
            name="pass"
            onChange={this.handleChange}
            error={errorPass}
            helperText={err_passwordText}
            inputRef={node => (this.password = node)}
            inputProps={inputProps}
            required
            label="Password"
            type="password"
          />{" "}
          <br />
          <Button style={margins} type="submit">
            Login
          </Button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log("login state", state);
  return {
    isLoginFetching: state.loginReducer.isLoginFetching,
    response: state.loginReducer.response
  };
};

export default connect(
  mapStateToProps,
  null
)(Login);
