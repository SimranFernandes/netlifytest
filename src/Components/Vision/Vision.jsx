import React, { Component } from "react";
import Header from "../indexPage/header";
import Header1 from "../../Components/Vision/headerVision";
import Footer from "../../Components/Vision/Footer";
import Footers3 from "../indexPage/Footer3";
class Vision extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <Header />
        <Header1 />
        <Footer />
        <Footers3 />
      </div>
    );
  }
}

export default Vision;
