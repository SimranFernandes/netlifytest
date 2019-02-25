import React, { Component } from "react";
import Header from "../cateringPage/headerCatering";
import Body from "../cateringPage/bodyCatering";
import Footer from "../cateringPage/Footer";
import Menu from "../indexPage/header";

class CateringPage extends Component {
  state = {};
  render() {
    return (
      <div>
        <Menu />
        <Header />
        <Body />
        <Footer />
      </div>
    );
  }
}

export default CateringPage;
