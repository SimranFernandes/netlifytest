import React, { Component } from "react";
import Header from "../indexPage/header";
import Header1 from "../../Components/Vision/headerVision";
import Footer from "../../Components/Vision/Footer";
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
      </div>
    );
  }
}

export default Vision;
