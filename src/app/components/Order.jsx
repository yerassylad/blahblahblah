import React, { Component } from "react";
import CircleIcon from "./CircleIcon";
import CarwashServiceIcon from "./CarwashServiceIcon";

class Order extends Component {
  render() {
    const { user } = this.props;
    let name = "Михаил";
    let car = "Huindai Solaris 234";
    if (user) {
      name = user.name;
      car = user.carMark + " " + user.carModel;
    }
    return (
      <div className="border-bottom tableRow">
        <div className="border-bottom tableCol">
          <CircleIcon text="1" bg="#A5B0BF" />
        </div>
        <div className="border-bottom tableCol">
          <span className="small-text">18.03.2018</span>
          <br />
          <span className="bold-text">19:45</span>
        </div>
        <div className="border-bottom tableCol">
          <span className="small-text">18.03.2018</span>
          <br />
          <span className="bold-text">19:45</span>
        </div>
        <div className="border-bottom tableCol">
          <CarwashServiceIcon />
        </div>
        <div className="border-bottom tableCol">
          <div className="small-text">{name}</div>
          <div className="bold-text">{car}</div>
        </div>
        <div className="small-text border-bottom tableCol">Иванов В.</div>
        <div className="status-text border-bottom tableCol">
          Ожидает
          <br /> заезда
        </div>
        <div className="price border-bottom tableCol">1234 P</div>
      </div>
    );
  }
}

export default Order;
