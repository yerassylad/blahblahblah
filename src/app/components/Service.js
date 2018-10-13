import React, { Component } from "react";
import classNames from "classnames";

// images
import carWashImg from "../../assets/img/icon/u1_Icon.svg";

class Service extends Component {
  constructor(props) {
    super(props);
    this.handleCheckClicked = this.handleCheckClicked.bind(this);
  }
  handleCheckClicked() {
    // console.log("sdsadsadasdas");
    this.props.serviceClicked();
  }
  render() {
    const { name, isSelected } = this.props;
    // console.log("selected", name, isSelected);
    return (
      <tr>
        <td>
          <img src={carWashImg} alt="carWashImg" />
        </td>
        <td>{name}</td>
        <td>45</td>
        <td>
          <div className="num-f">
            <button>-</button>
            <input type="text" value="1" />
            <button>+</button>
          </div>
        </td>
        <td>600 Р</td>
        <td>
          <button
            onClick={this.handleCheckClicked}
            className={classNames("check", { active: isSelected })}
          />
        </td>
      </tr>
    );
  }
}

export default Service;
