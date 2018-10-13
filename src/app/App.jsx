import React from "react";
import Login from "./components/Login";
import Main from "./components/Main";
import { Switch, Route, withRouter } from "react-router-dom";

const App = () => {
  // const { pathname } = props.location
  // console.log('location', pathname)
  return (
    <div>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/" component={Main} />
      </Switch>
    </div>
  );
};

export default withRouter(App);
