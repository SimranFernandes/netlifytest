import React, { Component } from "react";
import Header1 from "../indexPage/header";
import Header from "../SponsorBiryani/headerBiryani";
import Bodys from "../SponsorBiryani/body";
import Footer from "../SponsorBiryani/Footer";
import Footers3 from "../indexPage/Footer3";
class SponsorBiryani extends Component {
  state = {};
  render() {
    return (
      <div>
        <Header1 />
        <Header />
        <Bodys />
        <Footer />
        <Footers3 />
      </div>
    );
  }
}

export default SponsorBiryani;
