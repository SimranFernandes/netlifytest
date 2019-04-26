import React, { Component } from "react";
class Footer3 extends Component {
  state = {};
  render() {
    return (
      <div className="row lowerfooter">
        <div className="col-sm-12" />
        <p className="center1">
          Our Payment Partners:
          <a href="../../Assets/Image/paytmQrcode.jpg" target="_blank">
            <img src="../../Assets/Image/Paytm-Logo.jpg" />
          </a>
          <a href="https://easebuzz.in/pay/famousbiryaniwala" target="_blank">
            <img src="../../Assets/Image/eassypay.png" />
          </a>
        </p>
      </div>
    );
  }
}

export default Footer3;
