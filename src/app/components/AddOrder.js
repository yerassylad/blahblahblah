import React, { Component } from "react";
import classNames from "classnames";
import _ from "lodash";
import MaskedInput from "react-text-mask";

class AddOrder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        phoneNumber: "",
        username: "",
        carMark: "",
        carModel: "",
        carNumber: ""
      },
      error: {
        phoneNumber: null,
        username: null,
        carMark: null,
        carModel: null,
        carNumber: null
      }
    };
    this.onTextFieldChange = this.onTextFieldChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.formValidation = this.formValidation.bind(this);
    this.nextStep = this.nextStep.bind(this);
  }
  nextStep() {
    let data = {};
    let wash = {};
    wash.carMark = this.refs.carMark.value;
    wash.carModel = this.refs.carModel.value;
    wash.phoneCode = "7";
    wash.phoneNumber = this.refs.phoneNumber.value;
    wash.carNumber = this.refs.carNumber.value;
    data.wash = wash;
    this.props.makeRequest(data);
    this.props.changeStep(1);
    // console.log("data", data);
  }

  handleUserInput(e) {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value }, () => {
      this.validateField(name, value);
    });
  }

  formValidation(fieldsToValidate = [], callback = () => {}) {
    const { user } = this.state;
    const allfields = {
      phoneNumber: {
        message: " Введите номер в формате +7(XXX)XXX-XX-XX",
        doValidate: () => {
          const value = _.get(user, "phoneNumber", " ");
          if (value.match(/\+7\(\d{3}\)\d{3}-\d{2}-\d{2}/)) {
            return true;
          }
          return false;
        }
      },

      username: {
        message: " Поле 'ФИО' не должно быть пустым",
        doValidate: () => {
          const value = _.trim(_.get(user, "username", " "));
          if (value.length > 0) {
            return true;
          }
          return false;
        }
      },

      carNumber: {
        message: " Поле 'Гос. номер' не должно быть пустым",
        doValidate: () => {
          const value = _.trim(_.get(user, "carNumber", " "));
          if (value.length > 0) {
            return true;
          }
          return false;
        }
      },

      carMark: {
        message: " Поле 'Марка' не должно быть пустым",
        doValidate: () => {
          const value = _.trim(_.get(user, "carMark", " "));
          if (value.length > 0) {
            return true;
          }
          return false;
        }
      },

      carModel: {
        message: " Поле 'Модель' не должно быть пустым",
        doValidate: () => {
          const value = _.trim(_.get(user, "carModel", " "));
          if (value.length > 0) {
            return true;
          }
          return false;
        }
      }
    };

    let errors = this.state.error;
    _.each(fieldsToValidate, field => {
      const fieldValidate = _.get(allfields, field);
      if (fieldValidate) {
        errors[field] = null;
        const isFieldValid = fieldValidate.doValidate();
        if (isFieldValid === false) {
          errors[field] = _.get(fieldValidate, "message");
        }
      }
    });

    this.setState(
      {
        error: errors
      },
      () => {
        let isValid = true;
        _.each(errors, err => {
          if (err) {
            isValid = false;
          }
        });
        callback(isValid);
      }
    );
  }

  onTextFieldChange(e) {
    let { user } = this.state;
    const fieldName = e.target.name;
    const fieldValue = e.target.value;
    user[fieldName] = fieldValue;
    this.setState({ user: user });
  }

  onSubmit(e) {
    e.preventDefault();
    const fieldNeedToValidate = [
      "username",
      "phoneNumber",
      "carMark",
      "carModel",
      "carNumber"
    ];
    this.formValidation(fieldNeedToValidate, isValid => {
      //console.log("Validated?", isValid);
      //console.log(this.state);
      if (isValid === true) {
        this.nextStep();
      }
    });
  }
  render() {
    const { error } = this.state;

    const errorStyle = {
      color: "#ff0000"
    };

    let errors = this.state.error;
    return (
      <div>
        <div className="form-block clearfix">
          <div className="search clearfix">
            <input type="search" placeholder="Быстрый поиск клиента.." />
            <button>
              <img src={require("../../assets/img/icon/search.svg")} alt="" />
            </button>
          </div>
          <div className="col-md-12 col-sm-12 col-xs-12 form-all padding-0">
            <div className="col-md-4 col-sm-6 col-xs-12 pl-0">
              <h4>Данные клиента:</h4>

              <form onSubmit={this.onSubmit}>
                <div
                  className={classNames("form-1", {
                    error: _.get(error, "phoneNumber")
                  })}
                >
                  <span>Телефон *</span>
                  {errors.phoneNumber && (
                    <span style={errorStyle}>{errors.phoneNumber}</span>
                  )}
                  <MaskedInput
                    autoFocus
                    defaultValue="7"
                    mask={[
                      "+",
                      /\d/,
                      "(",
                      /\d/,
                      /\d/,
                      /\d/,
                      ")",
                      /\d/,
                      /\d/,
                      /\d/,
                      "-",
                      /\d/,
                      /\d/,
                      "-",
                      /\d/,
                      /\d/
                    ]}
                    ref="phoneNumber"
                    name="phoneNumber"
                    type="text"
                    className="form-input"
                    placeholder="+7 (___) ___-__-__"
                    value={this.state.phoneNumber}
                    onChange={this.onTextFieldChange}
                  />
                </div>
              </form>

              <form onSubmit={this.onSubmit}>
                <div className="form-1">
                  <span>ФИО</span>
                  {errors.username && (
                    <span style={errorStyle}>{errors.username}</span>
                  )}
                  <input
                    type="text"
                    name="username"
                    className="form-input"
                    value={this.state.username}
                    onChange={this.onTextFieldChange}
                  />
                </div>
              </form>

              <div className="form-1">
                <span>Группа пользователей</span>
                <select className="form-select">
                  <option value="">Постоянный клиент</option>
                  <option value="">Постоянный клиент</option>
                </select>
              </div>
              <button className="button-bnone">
                <span>+</span> Добавить данные
              </button>
            </div>

            <div className="col-md-8 col-sm-6 col-xs-12 pr-0">
              <h4>Укажите данные автомобиля:</h4>
              <div className="col-md-5 col-sm-12 col-xs-12 pd-0">
                <div className="form-1">
                  <span>Класс авто *</span>
                  <select className="form-select">
                    <option value="">Легковая</option>
                    <option value="">Легковая</option>
                  </select>
                </div>

                <form onSubmit={this.onSubmit}>
                  <div className="form-1">
                    <span>Гос. номер</span>
                    {errors.carNumber && (
                      <span style={errorStyle}>{errors.carNumber}</span>
                    )}
                    <input
                      ref="carNumber"
                      name="carNumber"
                      type="text"
                      className="form-input"
                      value={this.state.carNumber}
                      onChange={this.onTextFieldChange}
                    />
                  </div>
                </form>
              </div>
              <div className="col-md-7 col-sm-12 col-xs-12 pd-0">
                <form onSubmit={this.onSubmit}>
                  <div className="form-1">
                    <span>Марка</span>
                    {errors.carMark && (
                      <span style={errorStyle}>{errors.carMark}</span>
                    )}
                    <input
                      ref="carMark"
                      name="carMark"
                      type="text"
                      className="form-input"
                      value={this.state.carMark}
                      onChange={this.onTextFieldChange}
                    />
                  </div>

                  <div className="form-1">
                    <span>Модель</span>
                    {errors.carModel && (
                      <span style={errorStyle}>{errors.carModel}</span>
                    )}
                    <input
                      ref="carModel"
                      name="carModel"
                      type="text"
                      className="form-input"
                      value={this.state.carModel}
                      onChange={this.onTextFieldChange}
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <form onSubmit={this.onSubmit}>
          <div className="switches">
            <button
              onClick={() => this.props.changeStep(-1)}
              className="prev active"
            />
            <button className="next" />
          </div>
        </form>
      </div>
    );
  }
}

export default AddOrder;
