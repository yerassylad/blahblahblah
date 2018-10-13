import React, { Component } from "react";
import { Link } from "react-router-dom";

// картинки
import logo from "../../assets/img/logo.png";
import ordersImg from "../../assets/img/icon/icon1.svg";
import reportsImg from "../../assets/img/icon/icon2.svg";
import customersAndEmployeesImg from "../../assets/img/icon/icon3.svg";
import servicesAndPricesImg from "../../assets/img/icon/icon4.svg";
import settingsImg from "../../assets/img/icon/icon5.svg";
import signOutImg from "../../assets/img/icon/icon6.svg";

// стили
import "../../assets/css/bootstrap.min.css";
import "../../assets/css/bootstrap-combined.no-icons.min.css";
import "../../../node_modules/font-awesome/css/font-awesome.min.css";
import "../../assets/css/menu.css";
import "../../assets/css/fonts.css";
import "../../assets/css/style.css";
import "../../assets/css/media.css";

class LeftPanel extends Component {
  render() {
    return (
      <aside id="left-panel" className="left-panel">
        <a id="menuToggle" className="menutoggle pull-left">
          <i className="fa fa-bars" aria-hidden="true" />
        </a>
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="Logo" className="img-responsive" />
          </Link>
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
                <Link to="/" className="active">
                  <img src={ordersImg} alt="ordersImg" /> Заказы
                  <span className="menu-bcircle">6</span>
                </Link>
              </li>
              <li>
                <Link to="/reports">
                  <img src={reportsImg} alt="reportsImg" /> Отчеты
                </Link>
              </li>
              <li>
                <Link to="/">
                  <img
                    src={customersAndEmployeesImg}
                    alt="customersAndEmployeesImg"
                  />{" "}
                  Клиенты
                  <span>+5</span>
                </Link>
              </li>
              <li>
                <Link to="/">
                  <img
                    src={customersAndEmployeesImg}
                    alt="customersAndEmployeesImg"
                  />{" "}
                  Сотрудники
                </Link>
              </li>
              <li>
                <Link to="/">
                  <img src={servicesAndPricesImg} alt="servicesAndPricesImg" />{" "}
                  Услуги и цены
                </Link>
              </li>
              <li>
                <Link to="/settings">
                  <img src={settingsImg} alt="settingsImg" /> Настройки
                </Link>
              </li>
              <li>
                <Link to="/">
                  <img src={signOutImg} alt="signOutImg" /> Выход
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </aside>
      // <h1>YERASSYL</h1>
    );
  }
}

export default LeftPanel;
