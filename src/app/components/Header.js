import React, { Component } from "react";
import classNames from "classnames";

// images
import logoShield from "../../assets/img/Logo_shield.png";

// icons

class Header extends Component {
  constructor(props) {
    super(props);
    this.isActive = this.isActive.bind(this);
  }

  isActive(step) {
    return this.props.step === step;
  }

  render() {
    return (
      <div>
        <div className="col-md-12 col-sm-12 col-xs-12 menu-block">
          <div className="col-md-2 block-tab">
            <img src={logoShield} alt="" className="img-responsive" />
          </div>
          <div className="col-md-2 block-tab">
            <div className="clock">
              <img
                src={require("../../assets/img/icon/icon7.svg")}
                alt=""
                className="center-block"
              />{" "}
              <span>2</span>
            </div>
          </div>
          <div className="col-md-8 col-sm-12 mb-none">
            <div className="menu-2">
              <ul>
                <li>
                  <a href="#">
                    <span className="m-cirle">12</span>
                    Очередь
                  </a>
                </li>
                <li>
                  <a href="#" className="menu_1">
                    <div className="df">
                      <span className="number">1</span> <span className="img" />
                    </div>{" "}
                    Авто в боксе
                  </a>
                </li>
                <li>
                  <a href="#" className="menu_1">
                    <div className="df">
                      <span className="number">2</span> <span className="img" />
                    </div>{" "}
                    Авто в боксе
                  </a>
                </li>
                <li>
                  <a href="#" className="menu_1">
                    <div className="df">
                      <span className="number gray">3</span>
                      <span className="img" />
                    </div>{" "}
                    Свободен
                  </a>
                </li>
                <li>
                  <a href="#" className="menu_2">
                    <div className="df">
                      <span className="number red">4</span>{" "}
                      <span className="img4" />
                    </div>{" "}
                    Нет сигнала
                  </a>
                </li>
                <li>
                  <a href="#" className="active menu_1">
                    <div className="df">
                      <span className="number">5</span> <span className="img" />
                    </div>{" "}
                    Авто в боксе
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-md-12 col-sm-12 col-xs-12 block1">
          <div className="col-md-4 col-sm-12 col-xs-12">
            <h1>
              <span>
                <img src={require("../../assets/img/icon/icon10.svg")} alt="" />
              </span>
              Новый заказ
            </h1>
          </div>
          <div className="col-md-8 col-sm-12 col-xs-12">
            <ul className="mb-none">
              <li>
                <a href="">СТО</a>
              </li>
              <li>
                <a href="" className="active">
                  Автомойка
                </a>
              </li>
              <li>
                <a href="">Магазин</a>
              </li>
              <li>
                <a href="">Шиномонтаж</a>
              </li>
            </ul>
            <div className="mobile-select">
              <select name="" id="">
                <option value="">СТО</option>
                <option value="">Автомойка</option>
                <option value="">Магазин</option>
                <option value="">Шиномонтаж</option>
              </select>
            </div>
          </div>
        </div>
        <div className="col-md-12 col-sm-12 col-xs-12 block2">
          <ul>
            <li>
              <a href="#" className={classNames({ active: this.isActive(0) })}>
                <span>1</span> Клиент
              </a>
            </li>
            <li>
              <a href="#" className={classNames({ active: this.isActive(1) })}>
                <span>2</span> Дата и время
              </a>
            </li>
            <li>
              <a href="#" className={classNames({ active: this.isActive(2) })}>
                <span>3</span> Услуги
              </a>
            </li>
            <li>
              <a href="#" className={classNames({ active: this.isActive(3) })}>
                <span>4</span> Исполнители
              </a>
            </li>
            <li>
              <a href="#" className={classNames({ active: this.isActive(4) })}>
                <span>5</span> Подтверждение
              </a>
            </li>
          </ul>
          <div className="mobile-menu2">
            <div className="prev">
              <i className="fa fa-chevron-left" aria-hidden="true" />
            </div>
            <div className="mm-2">
              Клиент <p>Шаг 1 из 5</p>
            </div>
            <div className="next">
              <i className="fa fa-chevron-right" aria-hidden="true" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
