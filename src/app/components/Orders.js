import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import TablePagination from "@material-ui/core/TablePagination";
import Button from "@material-ui/core/Button";
import { fetchOrders } from "../actions/orderActions";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Order from "./Order";

class Orders extends Component {
  constructor(props) {
    super(props);
    const { textField } = props;
    const { dispatch } = props;
    this.textField = textField;
    this.dispatch = dispatch;
    this.state = {
      page: 0,
      rowsPerPage: 5,
      dateFrom: "",
      dateTo: ""
    };

    this.addOrderClicked = this.addOrderClicked.bind(this);
  }

  componentDidMount() {
    this.dispatch(fetchOrders("2018-05-24", "2018-09-15"));
  }

  addOrderClicked() {
    this.props.history.push("/addOrder");
  }

  handleChangePage(page) {
    this.setState({ page });
  }

  handleChangeRowsPerPage(event) {
    this.setState({ rowsPerPage: event.target.value });
  }
  dateFromChanged(event) {
    console.log("dateFrom", event.target.value);
    this.setState({ dateFrom: event.target.value });
  }
  dateToChanged(event) {
    console.log("dateTo", event.target.value);
    this.setState({ dateTo: event.target.value });
  }
  render() {
    console.log("props", this.props);
    const { rowsPerPage, page } = this.state;
    const { orders } = this.props;
    const orderList = orders.map(order => <Order key={order.id} {...order} />);
    return (
      <div style={{ backgroundColor: "white", width: "auto" }}>
        <div className="table-filter">
          <div className="center-vertical small-text">
            <TextField
              style={{ display: "inline-block" }}
              id="from"
              label="От"
              type="date"
              defaultValue="2018-05-24"
              className={this.textField}
              onChange={this.dateFromChanged}
              InputLabelProps={{
                shrink: true
              }}
            />
            <TextField
              style={{ display: "inline-block", marginLeft: "16px" }}
              id="to"
              label="До"
              type="date"
              defaultValue="2018-05-24"
              className={this.textField}
              onChange={this.dateToChanged}
              InputLabelProps={{
                shrink: true
              }}
            />
          </div>
        </div>
        <div className="table">
          <div className="table-head-text tableRow">
            <div className="border-bottom-h tableCol">Бокс</div>
            <div className="border-bottom-h tableCol">
              Начало
              <br /> мойки
            </div>
            <div className="border-bottom-h tableCol">
              Завершение
              <br /> мойки
            </div>
            <div className="border-bottom-h tableCol">Услуги</div>
            <div className="border-bottom-h tableCol">Клиент</div>
            <div className="border-bottom-h tableCol">Мойщики</div>
            <div className="border-bottom-h tableCol">Статус</div>
            <div className="border-bottom-h tableCol">Стоимость</div>
          </div>
          {orderList}
          <TablePagination
            component="div"
            count={10}
            rowsPerPage={rowsPerPage}
            page={page}
            backIconButtonProps={{
              "aria-label": "Previous Page"
            }}
            nextIconButtonProps={{
              "aria-label": "Next Page"
            }}
            onChangePage={this.handleChangePage}
            onChangeRowsPerPage={this.handleChangeRowsPerPage}
          />
        </div>
        <Button onClick={this.addOrderClicked}>Добавить</Button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log("orders state", state);
  return { orders: state.orderReducer.items };
};

export default withRouter(
  connect(
    mapStateToProps,
    null
  )(Orders)
);
