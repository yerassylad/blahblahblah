import React, { Component } from "react";
import Service from "./Service";
import fetch from "cross-fetch";

// icons
import carWashIcon from "../../assets/img/icon/u1_Icon.svg";
import teaCupIcon from "../../assets/img/icon/u2_Icon.svg";
import smileIcon from "../../assets/img/icon/u3_Icon.svg";

class Services extends Component {
  constructor(props) {
    super(props);
    this.state = {
      services: [],
      price: 0,
      selectedServices: {}
    };
    this.serviceClicked = this.serviceClicked.bind(this);
    this.getServices = this.getServices.bind(this);
  }
  serviceClicked(service) {
    let { selectedServices, price } = this.state;
    if (selectedServices[service.id]) {
      delete selectedServices[service.id];
      price -= 100;
    } else {
      selectedServices[service.id] = service;
      price += 100;
    }
    this.setState({ price, selectedServices });
    console.log("selected services", selectedServices);
  }
  componentWillMount() {
    this.getServices();
  }
  getServices() {
    console.log("send request here");
    const sid = localStorage.getItem("sid");
    fetch("/api/owners/owner/get/goods/services?sid=" + sid)
      .then(response => response.json(), error => console.log("error", error))
      .then(json => {
        console.log("services", json);
        this.setState({ services: json.goods_services });
      });
  }
  render() {
    const { services, selectedServices } = this.state;
    let serviceList = null;
    if (services) {
      serviceList = services.map(s => (
        <Service
          isSelected={selectedServices[s.id] != null}
          serviceClicked={() => this.serviceClicked(s)}
          key={s.id}
          {...s}
        />
      ));
    }
    return (
      <div>
        <div class="block4 clearfix">
          <div class="col-md-12 col-sm-12 col-xs-12 bg_fl">
            <div class="col-md-8 col-sm-12 col-xs-12 pl-0 order-2">
              <div class="col-md-12 col-sm-12 col-xs-12 padding-0 dflex">
                <div class="col-md-7 col-sm-8 col-xs-12 pl-0 order-22">
                  <div class="search clearfix">
                    <input
                      type="search"
                      placeholder="Быстрый поиск клиента.."
                    />
                    <button>
                      <img
                        src={require("../../assets/img/icon/search.svg")}
                        alt=""
                      />
                    </button>
                  </div>
                </div>
                <div class="col-md-5 col-sm-4 col-xs-12 pr-0 order-11">
                  <div class="form-1">
                    <span>Наборы услуг:</span>
                    <select name="" id="" class="form-select">
                      <option value="">Автомойка</option>
                      <option value="">Автомойка</option>
                    </select>
                  </div>
                </div>
              </div>
              <div class="col-md-12 col-sm-12 col-xs-12 padding-0 block4-table">
                <table>
                  <tr>
                    <th />
                    <th>
                      Название услуги{" "}
                      <i class="fa fa-caret-down" aria-hidden="true" />
                    </th>
                    <th>
                      Норма (минут){" "}
                      <i class="fa fa-caret-down" aria-hidden="true" />
                    </th>
                    <th>Кол-во</th>
                    <th>
                      Стоимость (на 1 исп.){" "}
                      <i class="fa fa-caret-down" aria-hidden="true" />
                    </th>
                    <th>
                      <img
                        src={require("../../assets/img/icon/icon-setting.svg")}
                        alt=""
                      />
                    </th>
                  </tr>
                  {serviceList}
                </table>
              </div>
            </div>
            <div class="col-md-4 col-sm-12 col-xs-12 pr-0 sm-pd order-1">
              <div class="block4-box">
                <div class="b4-title">
                  <div>
                    <span>Стоимость:</span> <h3>2 300 Р</h3>
                  </div>
                  <div>
                    <span>Длительность:</span> <h4>1ч. 25 мин.</h4>
                  </div>
                </div>
                <div class="b4-table">
                  <table>
                    <tr>
                      <td>
                        <img src={carWashIcon} alt="" />
                      </td>
                      <td>
                        <p>Стандартный комплекс</p>
                      </td>
                      <td>x1</td>
                      <td>600 Р</td>
                      <td>
                        <button>
                          {/* <img
                            src={require("../../assets/img/icon/icon-delete.svg")}
                            alt=""
                          /> */}
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <img src={teaCupIcon} alt="teaCupIcon" />
                      </td>
                      <td>
                        <p>Кофе</p>
                      </td>
                      <td>x1</td>
                      <td>600 Р</td>
                      <td>
                        <button>
                          {/* <img
                            src={require("../../assets/img/icon/icon-delete.svg")}
                            alt=""
                          /> */}
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <img src={smileIcon} alt="" />
                      </td>
                      <td>
                        <p>Пылесос салона</p>
                      </td>
                      <td>x1</td>
                      <td>600 Р</td>
                      <td>
                        <button>
                          {/* <img
                            src={require("../../assets/img/icon/icon-delete.svg")}
                            alt=""
                          /> */}
                        </button>
                      </td>
                    </tr>
                  </table>
                </div>
                <div class="b4-time">
                  <div>
                    <span>Начало мойки:</span>{" "}
                    <div class="time">
                      12/04/2018 <span>10:20</span>
                    </div>
                  </div>
                  <div>
                    <span>Окончание:</span>{" "}
                    <div class="time bg-gray">
                      12/04/2018 <span>12:30</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="switches">
          <button
            onClick={() => this.props.changeStep(-1)}
            className="prev active"
          />
          <button onClick={() => this.props.changeStep(1)} className="next" />
        </div>
      </div>
    );
  }
}

export default Services;
