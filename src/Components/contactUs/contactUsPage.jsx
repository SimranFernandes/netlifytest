import React, { Component } from "react";
import Header from "../contactUs/headerContactUS";
import Body from "../contactUs/bodyContactUS";
import Footer from "../contactUs/Footer";
import Menu from "../indexPage/header";
class contactUS extends Component {
  state = {};
  render() {
    return (
      <div>
        <Menu />
        <Body />
        <Footer />
      </div>
    );
  }
}

export default contactUS;
