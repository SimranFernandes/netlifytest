import React, { Component } from "react";
import Header from "../contactUs/headerContactUS";
import Body from "../contactUs/bodyContactUS";
import Footer from "../contactUs/Footer";
import Menu from "../indexPage/header";
import Footers3 from "../indexPage/Footer3";
class contactUS extends Component {
  state = {};
  render() {
    return (
      <div>
        <Menu />
        <Body />
        <Footer />
        <Footers3 />
      </div>
    );
  }
}

export default contactUS;
