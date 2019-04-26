import React, { Component } from "react";
import Header from "../indexPage/header";
import Body from "../indexPage/body";
import Footer from "../indexPage/footer";
import Footers from "../indexPage/Footer1";
import Footers3 from "../indexPage/Footer3";
import MediaQuery from "react-responsive";
class IndexPage extends Component {
  state = {};
  render() {
    return (
      <div className="">
        <Header />
        <Body />
        <Footer />
        <Footers />
        <Footers3 />
      </div>
    );
  }
}

export default IndexPage;
