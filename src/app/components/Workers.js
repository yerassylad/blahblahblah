import React, { Component } from "react";
import Worker from "./Worker";
import fetch from "cross-fetch";

// images
import carWashImg from "../../assets/img/icon/u1_Icon.svg";
// import teaCupImg from '../../assets/img/icon/u2_icon.svg';
// import smileImg from './../../assets/img/icon/u2_icon'

class Workers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      workers: [],
      selectedWorkers: {}
    };
    this.workerClicked = this.workerClicked.bind(this);
    this.sendRequest = this.sendRequest.bind(this);
    this.nextStep = this.nextStep.bind(this);
  }
  nextStep() {
    let data = [];
    let { selectedWorkers } = this.state;
    for (var key in selectedWorkers) {
      data.push({ id: selectedWorkers[key].id });
    }
    this.props.makeRequest(data);
    this.props.changeStep(1);
  }
  workerClicked(worker) {
    let { selectedWorkers } = this.state;
    if (selectedWorkers[worker.id]) {
      delete selectedWorkers[worker.id];
    } else {
      selectedWorkers[worker.id] = worker;
    }
    this.setState({ selectedWorkers });
    // console.log("selected workers", selectedWorkers);
  }
  sendRequest() {
    // console.log("elex");
    fetch("/api/owners/managers/free?sid=" + localStorage.getItem("sid"))
      .then(response => response.json())
      .then(data => this.setState({ workers: data.managers }));
    // fetch('/api/owners/carWashs?sid='+localStorage.getItem('sid'))
    //     .then(response => response.json())
    //     .then(data => fetch('/api/owners/companies/'+data.carWashs[0].id+'/managers/?sid=' + localStorage.getItem('sid')))
    //     .then(response => response.json())
    //     .then(data => console.log('workers', data))
  }
  componentWillMount() {
    this.sendRequest();
  }
  render() {
    const { workers, selectedWorkers } = this.state;
    let workerList = workers.map(s => (
      <Worker
        isSelected={selectedWorkers[s.id] != null}
        key={s.id}
        {...s}
        workerClicked={() => this.workerClicked(s)}
      />
    ));
    return (
      <div>
        <div className="block4 block5 clearfix">
          <div className="col-md-12 col-sm-12 col-xs-12 bg_fl">
            <div className="col-md-8 col-sm-12 col-xs-12 pl-0 order-2">
              <div className="col-md-12 col-sm-12 col-xs-12 padding-0 dflex">
                <div className="col-md-12 padding-0 b5-title">
                  Выберите одного или несколько сотрудников для выполнения
                  заказа:
                </div>
                <div className="col-md-12 padding-0 b5-checkbox">
                  <input type="checkbox" id="only_free" />{" "}
                  <label for="only_free">
                    Только свободные (10:00 - 12:34)
                  </label>
                </div>
                <div className="col-md-7 col-sm-8 col-xs-12 pl-0 order-22">
                  <div className="search clearfix">
                    <input
                      type="search"
                      placeholder="Быстрый поиск клиента.."
                    />
                    <button>
                      {/* <img
                        src={require("../../assets/img/icon/search.svg")}
                        alt=""
                      /> */}
                    </button>
                  </div>
                </div>
                <div className="col-md-5 col-sm-4 col-xs-12 pr-0 order-11">
                  <div className="form-1">
                    <span>Должность:</span>
                    <select name="" id="" className="form-select">
                      <option value="">Автомойщик</option>
                      <option value="">Автомойщик</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="col-md-12 col-sm-12 col-xs-12 padding-0 block4-table">
                <table>
                  <tr>
                    <th colspan="2">
                      Сотрудник{" "}
                      <i className="fa fa-caret-down" aria-hidden="true" />
                    </th>
                    <th>
                      Должность{" "}
                      <i className="fa fa-caret-down" aria-hidden="true" />
                    </th>
                    <th>
                      Телефон{" "}
                      <i className="fa fa-caret-down" aria-hidden="true" />
                    </th>
                    <th />
                  </tr>
                  {workerList}
                </table>
              </div>
            </div>
            <div className="col-md-4 col-sm-12 col-xs-12 pr-0 sm-pd order-1">
              <div className="block4-box">
                <div className="b4-title">
                  <div>
                    <span>Стоимость:</span> <h3>2 300 Р</h3>
                  </div>
                  <div>
                    <span>Длительность:</span> <h4>1ч. 25 мин.</h4>
                  </div>
                </div>
                <div className="b4-table">
                  <table>
                    <tr>
                      <td>
                        <img src={carWashImg} alt="carWashImg" />
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
                        {/* <img
                          src={require("../../assets/img/icon/u2_icon.svg")}
                          alt=""
                        /> */}
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
                        {/* <img
                          src={require("../../assets/img/icon/u3_icon.svg")}
                          alt=""
                        /> */}
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
                <div className="b4-time">
                  <div>
                    <span>Начало мойки:</span>{" "}
                    <div className="time">
                      12/04/2018 <span>10:20</span>
                    </div>
                  </div>
                  <div>
                    <span>Окончание:</span>{" "}
                    <div className="time bg-gray">
                      12/04/2018 <span>12:30</span>
                    </div>
                  </div>
                </div>
                <div className="b4-table2">
                  <table>
                    <tr>
                      <td>
                        {/* <img
                          src={require("../../assets/img/user.png")}
                          alt=""
                        /> */}
                      </td>
                      <td>
                        Иванов Иван Иванович <span>Автомойщик</span>
                      </td>
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
                      <td>
                        Иванов Иван Иванович <span>Автомойщик</span>
                      </td>
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
              </div>
            </div>
          </div>
        </div>
        <div className="switches">
          <button
            onClick={() => this.props.changeStep(-1)}
            className="prev active"
          />
          <button onClick={() => this.nextStep()} className="next" />
        </div>
      </div>
    );
  }
}

export default Workers;
