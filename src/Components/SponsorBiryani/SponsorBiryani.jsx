import React, { Component } from "react";
import Header1 from "../indexPage/header";
import Header from "../SponsorBiryani/headerBiryani";
import Bodys from "../SponsorBiryani/body";
import Footer from "../SponsorBiryani/Footer";
class SponsorBiryani extends Component {
  state = {};
  render() {
    return (
      <div>
        <Header1 />
        <Header />
        <Bodys />
        <Footer />
      </div>
    );
  }
}

export default SponsorBiryani;
