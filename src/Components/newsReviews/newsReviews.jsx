import React, { Component } from "react";
import Header from "../newsReviews/homeReviews";
import Menu from "../indexPage/header";
import Body from "../newsReviews/bodyReviews";
import Footer from "../newsReviews/Footer1";
class newsReviews extends Component {
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

export default newsReviews;
