import React, { Component } from "react";
import Header1 from "../indexPage/header";

import Header from "../menuPage/headermenu";
import Body from "../menuPage/bodymenu1";
import Footer from "../menuPage/footermenu";

class MenuPage extends Component {
  state = {};
  render() {
    return (
      <div>
        <Header1 />
        <Header />
        <Body />
        <Footer />
      </div>
    );
  }
}

export default MenuPage;
