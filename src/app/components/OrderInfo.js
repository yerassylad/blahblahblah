import React, { Component } from "react";

class OrderInfo extends Component {
  render() {
    const { price, time } = this.props;
    return (
      <div>
        <div>{price}</div>
        <div>{time}</div>
      </div>
    );
  }
}

export default OrderInfo;
