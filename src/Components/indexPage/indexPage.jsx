import React, { Component } from "react";
import Header from "../indexPage/header";
import Body from "../indexPage/body";
import Footer from "../indexPage/footer";
import Footers from "../indexPage/Footer1";
class IndexPage extends Component {
  state = {};
  render() {
    return (
      <div className="">
        <Header />
        <Body />
        <Footer />
        <Footers />
      </div>
    );
  }
}

export default IndexPage;
