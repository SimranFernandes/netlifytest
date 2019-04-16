import React, { Component } from "react";
import slider2 from "../../Assets/Image/sliderPics/sponsor.jpg";
import Popup from "reactjs-popup";
class headerBiryani extends Component {
  constructor() {
    super();
    this.state = {
      shown: false
    };
  }

  toggle() {
    this.setState({
      shown: !this.state.shown
    });
  }

  state = {};

  style4 = {
    width: 1500
  };
  styles = {
    overflow: "auto",
    backgroundColor: "transparent"
  };
  render() {
    var shown = {
      display: this.state.shown ? "block" : "none"
    };

    var hidden = {
      display: this.state.shown ? "none" : "block"
    };
    return (
      <div>
        <img src={slider2} alt="Notebook" style={this.style4} />

        <h3 className="visionHeading">Sponsor Biryani</h3>
        <p className="para3">
          The goodness of the human heart is immeasurable and we at Famous
          Biryaniwala provide you with an opportunity to feed the
          underprivileged. You can sponsor a biryani feast as a Corporate Social
          Responsibility or merely bring smiles to a loved one’s face.
        </p>
        <div className="row lowerfooter">
          <div className="col-sm-12">
            <div className="col s4" style={this.style4}>
              <a
                className="waves-effect waves-light btn2  modal-trigger "
                href="#modal1"
              >
                <p className="para9">Sponsor Biryani</p>
              </a>

              <div id="modal1" className="modal ">
                <div className="modal-content" style={this.styles}>
                  <iframe
                    src="http://test1.syspree.com/Sponsor-Biryani/"
                    width="490"
                    height="560"
                    style={this.styles}
                  />
                </div>
                {/* <div className="modal-footer ">
                  <a
                    href="#!"
                    class="modal-close waves-effect waves-green btn-flat"
                  >
                    Agree
                  </a>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default headerBiryani;
