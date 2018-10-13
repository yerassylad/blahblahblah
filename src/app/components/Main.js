import React from "react";
import { withRouter } from "react-router-dom";
import Orders from "./Orders";
import CreateOrder from "./CreateOrder";
import { Switch, Route } from "react-router-dom";
import Settings from "./Settings";

const Main = props => {
  const login = () => {
    props.history.push("/login");
  };
  if (!localStorage.getItem("isLogged")) {
    login();
  }
  const drawer = (
    <aside id="left-panel" className="left-panel">
      <a id="menuToggle" className="menutoggle pull-left">
        <i className="fa fa-bars" aria-hidden="true" />
      </a>
      <div className="logo">
        <a href="#">
          <img
            src={require("../../assets/img/logo.png")}
            alt=""
            className="img-responsive"
          />
        </a>
      </div>

      <div className="left-panel-address">
        <div className="address-title">
          Aqua-city{" "}
          <button className="button-bnone">
            <i className="fa fa-angle-down" aria-hidden="true" />
          </button>
        </div>
        <div className="address-text">
          <span>г. Москва, ул. Верейская, д.2 </span>
        </div>
      </div>
      <nav className="navbar navbar-expand-sm navbar-default">
        <div className="navbar-header">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#main-menu"
            aria-controls="main-menu"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fa fa-bars" />
          </button>
        </div>

        <div id="main-menu" className="main-menu collapse navbar-collapse">
          <ul className="nav navbar-nav">
            <li>
              <a href="#" className="active">
                <img src={require("../../assets/img/icon/icon1.svg")} alt="" />{" "}
                Заказы
                <span className="menu-bcircle">6</span>
              </a>
            </li>
            <li>
              <a href="#">
                <img src={require("../../assets/img/icon/icon2.svg")} alt="" />{" "}
                Отчеты
              </a>
            </li>
            <li>
              <a href="#">
                <img src={require("../../assets/img/icon/icon3.svg")} alt="" />{" "}
                Клиенты
                <span>+5</span>
              </a>
            </li>
            <li>
              <a href="#">
                <img src={require("../../assets/img/icon/icon3.svg")} alt="" />{" "}
                Сотрудники
              </a>
            </li>
            <li>
              <a href="#">
                <img src={require("../../assets/img/icon/icon4.svg")} alt="" />{" "}
                Услуги и цены
              </a>
            </li>
            <li>
              <a href="/settings">
                <img src={require("../../assets/img/icon/icon5.svg")} alt="" />{" "}
                Настройки
              </a>
            </li>
            <li>
              <a onClick={() => login()}>
                <img src={require("../../assets/img/icon/icon6.svg")} alt="" />{" "}
                Выход
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </aside>
  );

  return (
    <div>
      {drawer}
      <div id="right-panel" className="right-panel clearfix">
        <Switch>
          <Route path="/addOrder" component={CreateOrder} />
          <Route exact path="/" component={Orders} />
          <Route path="/settings" component={Settings} />
        </Switch>
      </div>
    </div>
  );
};

export default withRouter(Main);
