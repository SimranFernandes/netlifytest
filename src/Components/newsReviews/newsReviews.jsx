import React, { Component } from "react";
import Header from "../newsReviews/homeReviews";
import Menu from "../indexPage/header";
import Body from "../newsReviews/bodyReviews";
import Footer from "../newsReviews/Footer1";
import Footers3 from "../indexPage/Footer3";
class newsReviews extends Component {
  state = {};
  render() {
    return (
      <div>
        <Menu />
        <Header />
        <Body />
        <Footer />
        <Footers3 />
      </div>
    );
  }
}

export default newsReviews;
