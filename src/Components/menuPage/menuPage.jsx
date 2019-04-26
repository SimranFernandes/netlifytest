import React, { Component } from "react";
import Header1 from "../indexPage/header";
import Header from "../menuPage/headermenu";
import Body from "../menuPage/bodymenu1";
import Footer from "../menuPage/footermenu";
import Footers3 from "../indexPage/Footer3";

class MenuPage extends Component {
  state = {};
  render() {
    return (
      <div>
        <Header1 />
        <Header />
        <Body />
        <Footer />
        <Footers3 />
      </div>
    );
  }
}

export default MenuPage;
