import React, { Component } from "react";
import facebook from "../../Assets/Image/fb.png";
import instagram from "../../Assets/Image/insta.png";
import twitter from "../../Assets/Image/twitter.png";
import google from "../../Assets/Image/google.png";

import Popup from "reactjs-popup";
class Footers extends Component {
  state = {};
  style = {
    width: 39,
    height: 39,
    paddingRight: 5
  };

  style2 = {
    paddingLeft: 20
  };
  style6 = {
    width: 400,
    height: 500
  };

  style4 = {
    left: 100
  };
  style5 = {
    left: 480
  };

  render() {
    return (
      <div>
        <div className="footmenu">
          <div clasName="row">
            <div className="col-sm-12" style={this.style2}>
              <div className="col-md-3">
                <p className="text2  p">
                  <a>Our Vision</a>
                  <br />
                  <a>Catering</a>
                  <br />
                  <a>Corporate Orders</a>
                  <br />
                  <a>Blog</a>
                  <br />
                  <a>Join Us</a>
                  <br />
                  <a>Unsubscribe</a>
                </p>
              </div>
            </div>
            <div className="col-md-3 text2 footer2">
              <h4>LOCATIONS</h4>
              <p className="container1 para7">
                Shop No. 1, D' Souza Villa Bldg, Opp Neptune Super Market,
                Majiwada Gav, Thane West, Thane, Maharashtra 400601
              </p>
            </div>

            <div className="col-md-3 text2 footer3">
              <a
                href="https://www.facebook.com/FamousBiryaniwala"
                target="_blank"
              >
                <img src={facebook} alt="facebook" style={this.style} />
              </a>

              <a
                href="https://www.instagram.com/famousbiryaniwala/"
                target="_blank"
              >
                <img src={instagram} alt="instagram" style={this.style} />
              </a>

              <a href="https://twitter.com/Famousbiryani" target="_blank">
                <img src={twitter} alt="twitter" style={this.style} />
              </a>
            </div>
          </div>
        </div>
        <div className="row lowerfooter">
          <div className="col-sm-12" />
          <p class="center1">
            Our Payment Partners:
            <a href="../../Assets/Image/paytmQrcode.jpg" target="_blank">
              <img src="../../Assets/Image/Paytm-Logo.jpg" />
            </a>
            <a href="https://easebuzz.in/pay/famousbiryaniwala" target="_blank">
              <img src="../../Assets/Image/eassypay.png" />
            </a>
          </p>
        </div>
      </div>
    );
  }
}

export default Footers;
