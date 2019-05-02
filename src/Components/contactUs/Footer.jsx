import React, { Component } from "react";
import facebook from "../../Assets/Image/fb-02.png";
import instagram from "../../Assets/Image/insta-02.png";
import twitter from "../../Assets/Image/tw-02.png";
import google from "../../Assets/Image/google.png";
class Footers extends Component {
  state = {};
  style = {
    width: 36,
    height: 36,
    paddingRight: 5
  };

  style2 = {
    paddingLeft: 20
  };
  render() {
    return (
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
              Majiwada Gav, Thane West-400601, Maharashtra
            </p>
          </div>

          <div className="col-md-3 text2 footer3">
            <div className>
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
              <p className="para10">
                <br />
                FSSAI:License No.21519069000256
                <br />
                GST No .27AYGPM0998R1ZE
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footers;
