import React, { Component } from "react";
import AddOrder from "./AddOrder";
import AddOrderDateTime from "./AddOrderDateTime";
import Services from "./Services";
import Workers from "./Workers";
import Confirm from "./Confirm";

class Step extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {}
    };
    this.makeRequest = this.makeRequest.bind(this);
  }

  makeRequest(d) {
    let { data } = this.state;
    if (this.props.step === 0) {
      data.wash = d.wash;
    } else if (this.props.step === 3) {
      data.managerses = d;
    }
    console.log("making request", this.state.data);
    this.setState({ data });
  }

  render() {
    const { step } = this.props;
    let content;
    switch (step) {
      case 0:
        content = (
          <AddOrder
            changeStep={this.props.changeStep}
            makeRequest={this.makeRequest}
          />
        );
        break;
      case 1:
        content = <AddOrderDateTime changeStep={this.props.changeStep} />;
        break;
      case 2:
        content = <Services changeStep={this.props.changeStep} />;
        break;
      case 3:
        content = (
          <Workers
            changeStep={this.props.changeStep}
            makeRequest={this.makeRequest}
          />
        );
        break;
      case 4:
        content = <Confirm data={this.state} />;
        break;
      default:
        content = <div>The step is {step}</div>;
    }
    return <div>{content}</div>;
  }
}

export default Step;
