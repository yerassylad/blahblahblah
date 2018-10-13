import fetch from "cross-fetch";
import { REQUEST_ORDERS, RECEIVE_ORDERS } from "./actionTypes";

const API_URL = "https://sdk.dev.g-moika.com/";
const CARWASHS = "/owners/carWashs";

const requestOrders = () => ({
  type: REQUEST_ORDERS,
  fetching: true
});

const receiveOrders = data => ({
  type: RECEIVE_ORDERS,
  fetching: false,
  items: data
});

const fetchOrders = dateFrom => dispatch => {
  // serverUri + '/owners/reports?sid=' + $rootScope.globals.sid
  //                         + "&dateFrom=" + $scope.dateFrom.getTime()
  //                         + "&dateTo=" + $scope.dateTo.getTime()+"&sort="+type+"&order="+orderType
  //
  var fromTime = new Date(dateFrom).getTime();
  var toTime = new Date().getTime();

  //

  dispatch(requestOrders());
  var sid = localStorage.getItem("sid");
  let url = API_URL + CARWASHS + "?sid=" + sid;
  console.log("url", url);
  return fetch(url)
    .then(response => {
      console.log("response carwashs", response);
      return response.json();
    })
    .then(json => {
      console.log("carWashs", json);
      return fetch(
        API_URL +
          CARWASHS +
          "/" +
          json.carWashs[0].id +
          "/reports?sid=" +
          sid +
          "&dateFrom=" +
          fromTime +
          "&dateTo=" +
          toTime +
          "&limit=10&offset=0"
      );
    })
    .then(
      response => {
        console.log("orders", response);
        return response.json();
      },
      error => console.log("error", error)
    )
    .then(json => {
      console.log("json orders", json);
      dispatch(receiveOrders(json.orders));
    });
};

export { fetchOrders };
