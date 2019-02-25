import React, { Component } from "react";
import slider2 from "../../Assets/Image/sliderPics/sponsor.jpg";
class headerBiryani extends Component {
  state = {};
  style4 = {
    width: 1348
  };
  render() {
    return (
      <div>
        <img src={slider2} alt="Notebook" style={this.style4} />

        <a
          className="waves-effect waves-light btn modal-trigger "
          href="#modal1"
        >
          <p className="para">Sponsor Biryani</p>
        </a>

        <div id="modal1" className="modal ">
          <div className="modal-content">
            <iframe
              src="http://test1.syspree.com/Sponsor-Biryani/"
              width="400"
              height="520"
              style={this.styles}
            />
          </div>
          <div className="modal-footer ">
            <a href="#!" class="modal-close waves-effect waves-green btn-flat">
              Agree
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default headerBiryani;
