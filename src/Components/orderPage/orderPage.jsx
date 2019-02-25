import React, { Component } from "react";
import Header from "../../Components/orderPage/headerPage";
import Header1 from "../../Components/indexPage/header";


class orderPage extends Component {
  state = {};
  render() {
    return (
      <div>
        <Header1 />
        <Header />
      </div>
    );
  }
}

export default orderPage;
