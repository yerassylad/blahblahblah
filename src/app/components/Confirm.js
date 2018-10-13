import React, { Component } from "react";
import fetch from "cross-fetch";
import { withRouter } from "react-router-dom";

// icons

import carWashIcon from "../../assets/img/icon/u1_Icon.svg";
import teaCupIcon from "../../assets/img/icon/u2_Icon.svg";
import smileIcon from "../../assets/img/icon/u3_Icon.svg";

class Confirm extends Component {
  constructor(props) {
    super(props);
    this.sendRequest = this.sendRequest.bind(this);
  }
  sendRequest() {
    // console.log("sending request");
    //         {
    //     "wash":{
    //     "startWashTime": <long>,
    //     "carWashId": <int>,
    //     "reservedBoxId": <int>,
    //     "carMark": <text>,
    //     "carModel": <text>,
    //     "carNumber": <text>,
    //     "dedlineWashTime": <long>,
    //     "phoneCode": <text>,
    //     "phoneNumber": <text>,
    //     "paymentType": <text>,
    //     "boxNumber": <int>
    //       },
    //       "user":{
    //         "phoneCode": <text>,
    //         "phoneNumber": <text>
    //       },
    //       "managerses":[
    //         {
    //         "id": <int>
    //       }
    //       ]
    // }

    let data = {};
    let wash = {};
    wash.startWashTime = new Date().getTime();
    wash.carWashId = 38;
    wash.reservedBoxId = 65;
    wash.carMark = "SDASDASD";
    wash.carModel = "dasdsads";
    wash.carNumber = "adasdas";
    wash.dedlineWashTime = new Date().getTime();
    wash.phoneCode = "7";
    wash.phoneNumber = "7784421562";
    wash.paymentType = "cash";
    wash.boxNumber = "1";
    let user = {};
    user.phoneCode = "7";
    user.phoneNumbe = "7784421562";
    data.wash = wash;
    data.user = user;
    data.managerses = [{ id: 35 }, { id: 36 }];

    let request = this.props.data.data;

    // console.log("rqe", request);
    request.user = {};
    request.user.phoneCode = "7";
    request.user.phoneNumber = request.wash.phoneNumber;

    request.wash.startWashTime = new Date().getTime();
    request.wash.carWashId = 38;
    request.wash.reservedBoxId = 65;
    request.wash.dedlineWashTime = new Date().getTime();
    request.wash.paymentType = "cash";
    request.wash.boxNumber = "1";

    fetch("/api/owners/carWash/wash?sid=" + localStorage.getItem("sid"), {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(request)
    })
      .then(response => {
        // console.log("response post", response);
        return response.json();
      })
      .then(data => {
        // console.log("data");
        this.props.history.push("/");
      });
  }
  render() {
    return (
      <div>
        <div className="block6 clearfix">
          <div className="col-md-12 col-sm-12 col-xs-12 bn-pos">
            <div className="block6-title">
              <h4>Проверьте и подтвердите парамеры заказа:</h4>
              <button onClick={this.sendRequest}>
                ПОДТВЕРДИТЬ ЗАКАЗ <img alt="" />
              </button>
            </div>
            <div className="col-md-12 col-sm-12 col-xs-12 b6">
              <div className="col-md-4 col-sm-6 col-xs-12 pl-30">
                <h3 className="b6-title">Заказ № O-445.15</h3>
                <div className="b6-1">
                  <span className="b6-t1">Клиент:</span>
                  <div className="b6-1a">
                    <div className="b6-1a-title">
                      {/* <img
                        src={require("../../assets/img/user.png")}
                        alt=""
                        className="user"
                      /> */}
                      <div className="name">
                        <p>Иванов Иван Иванович</p>{" "}
                        <span>Постоянный клиент</span>
                      </div>
                      <button className="button-bnone">...</button>
                    </div>
                    <div className="b6-1-footer">
                      <div className="b6-1f">
                        {/* <img
                          src={require("../../assets/img/icon/icon12.svg")}
                          alt=""
                        />{" "} */}
                        <span>0</span>
                      </div>
                      <div className="b6-1f">
                        {/* <img
                          src={require("../../assets/img/icon/icon-tel.svg")}
                          alt=""
                        />{" "} */}
                        <a href="tel:+7 985 582 64 63">+7 985 582 64 63</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="b6-2">
                  <span className="b6-t1">Автомобиль:</span>
                  <div className="b6-2a">
                    <div className="b6-2f">
                      <p>HUINDAI Solaris</p> <span>Легковая (класс B)</span>
                    </div>
                    <div className="b6-2ff">125 XXX 45</div>
                  </div>
                </div>
                <div className="b6-3">
                  <span className="b6-t1">Детали заказа:</span>
                  <div className="checkbox">
                    <input type="checkbox" id="order" />{" "}
                    <label for="order">Отложенный заказ</label>
                  </div>
                </div>
                <div className="b6-4">
                  <span className="b6-t2">Комментарий:</span>
                  <div className="b6-4f">
                    Клиент проверяет подтеки под зеркалами, нужно проверять
                    внимательно
                  </div>
                </div>
              </div>
              <div className="col-md-8 col-sm-6 col-xs-12 block6-block ">
                <div className="bl6-title">
                  <div className="bl-6l">
                    <span className="bl-6t">Длительность</span>
                    <h3>1ч. 25 мин.</h3>
                  </div>
                  <div className="bl-6d">
                    <span className="bl-6t">Скидка:</span>
                    <div className="bl-6j">
                      <select name="" id="">
                        <option value="">Произвольная</option>
                        <option value="">Произвольная</option>
                      </select>
                      <div className="bl-6dd">
                        <input type="text" value="450" />
                        <select name="" id="">
                          <option value="" selected>
                            Р
                          </option>
                          <option value="">Р</option>
                        </select>
                      </div>
                      <button className="button-bnone">
                        {/* <img
                          src={require("../../assets/img/icon/icon-delete.svg")}
                          alt=""
                        /> */}
                      </button>
                    </div>
                    <button className="button-bnone b6-but1">
                      <span>+</span> Добавить скидку
                    </button>
                  </div>
                  <div className="bl6-6p">
                    <span className="bl-6t">Стоимость заказа:</span>
                    <div>
                      <p>2 750 Р</p>
                      <h3>2 300 Р</h3>
                    </div>
                  </div>
                </div>
                <div className="bl6-table">
                  <div className="b4-table">
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
                          <img src={teaCupIcon} alt="" />
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
                    <button className="button-bnone b6-but1">
                      <span>+</span> Добавить услугу
                    </button>
                  </div>
                </div>
                <div className="bl6-time">
                  <div className="time-1">
                    <span>Начало мойки:</span>
                    <div>12/04/2018 10:20</div>
                  </div>
                  <div className="time-1">
                    <span>Окончание:</span>
                    <div className="bg-gray">12/04/2018 12:30</div>
                  </div>
                  <div className="time-1">
                    <span>Бокс:</span>
                    <select name="" id="">
                      <option value="">2</option>
                      <option value="">2</option>
                    </select>
                  </div>
                  <div className="time-1">
                    <span>Заезд в бокс:</span>
                    <div>19:30</div>
                  </div>
                </div>
                <div className="bl6-table2">
                  <div className="b4-table2">
                    <table>
                      <tr>
                        <td>
                          {/* <img
                            src={require("../../assets/img/user.png")}
                            alt=""
                          /> */}
                        </td>
                        <td>Иванов Иван Иванович</td>
                        <td>
                          <span>Автомойщик</span>
                        </td>
                        <td>+ 7 985 582 64 63</td>
                        <td />
                        <td>
                          <button className="delete">
                            {/* <img
                              src={require("../../assets/img/icon/icon-delete.svg")}
                              alt=""
                            /> */}
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          {/* <img
                            src={require("../../assets/img/user.png")}
                            alt=""
                          /> */}
                        </td>
                        <td>Иванов Иван Иванович</td>
                        <td>
                          <span>Автомойщик</span>
                        </td>
                        <td>+ 7 985 582 64 63</td>
                        <td>+ 750 Р</td>
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
                  <button className="button-bnone b6-but1">
                    <span>+</span> Добавить исполнителя
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="switches">
          <button className="prev active" />
          <button className="save">
            {/* <img src={require("../../assets/img/icon/icon11.svg")} alt="" /> */}
          </button>
        </div>
      </div>
    );
  }
}

export default withRouter(Confirm);
