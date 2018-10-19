import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";

import store from "./app/store";
import App from "./app/App";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/bootstrap-combined.no-icons.min.css";
// import "./assets/css/font-awesome.min.css"; // нет файлов fonts/fontawesome-webfont.eot и т.д. Из-за этого установил "font-awesome": "^4.7.0". все работает как надо
import "../node_modules/font-awesome/css/font-awesome.min.css";
import "./assets/css/menu.css";
import "./assets/css/fonts.css";
import "./assets/css/style.css";
import "./assets/css/media.css";
// import "../node_modules/font-awesome/css/font-awesome.css"; -- ne nujno

const isLogged = () => {
  var data = localStorage.getItem("isLogged");
  return data;
};
document.body.style.padding = 0;
document.body.style.margin = 0;

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App isLogged={() => isLogged()} />
      {/* <LeftPanel /> */}
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);

serviceWorker.unregister();
