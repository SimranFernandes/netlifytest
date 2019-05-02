import React, { Component } from "react";
import slider2 from "../../Assets/Image/sliderPics/catering.jpg";
import image1 from "../../Assets/Image/Services/birthday.jpg";
import image2 from "../../Assets/Image/Services/meeting.jpg";
import image3 from "../../Assets/Image/Services/Social gathering.jpg";
import image4 from "../../Assets/Image/Services/party.jpg";
import image5 from "../../Assets/Image/Services/sports.JPG";
import image6 from "../../Assets/Image/Services/field trip.jpg";
class headerCatering extends Component {
  state = {};

  style = {
    width: 350,
    height: 350
  };
  style2 = {
    paddingLeft: 50
  };
  style3 = {
    width: 341,
    height: 90,
    fontSize: 24,
    paddingTop: 30
  };
  style1 = {
    paddingTop: 15
  };
  style8 = {
    width: 341
  };
  style4 = {
    width: "100%"
  };
  style5 = {
    marginRight: 50,
    paddingTop: 30
  };

  render() {
    return (
      <div>
        <div class="container12">
          <img
            src={slider2}
            alt="Notebook"
            style={this.style4}
            className="CateringSlider"
          />
        </div>

        <div className="desktopViewSlider12">
          <h2 className="heading ">Services</h2>
          <div className="row">
            <div className="col-sm-12 service">
              <div className="col s4 divgap">
                <img src={image1} alt="Notebook" className="cateringimg" />
                <div className="">
                  <h3 className="para2 slidegap">Birthday Parties</h3>
                </div>
              </div>

              <div className="col s4 divgap">
                <img src={image2} alt="Notebook" className="cateringimg" />
                <div className="">
                  <h3 className="para2 slidegap">Corporate Events</h3>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-sm-12 service">
              <div className="col s4 divgap">
                <img src={image3} alt="Notebook" className="cateringimg" />
                <div className="">
                  <h3 className="para2 slidegap">Social Gathering</h3>
                </div>
              </div>

              <div className="col s4 divgap">
                <img src={image5} alt="Notebook" className="cateringimg" />
                <div className="">
                  <h3 className="para2 slidegap">Sports Gathering</h3>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-sm-12 service">
              <div className="col s4 divgap">
                <img src={image4} alt="Notebook" className="cateringimg" />
                <div className="">
                  <h3 className="para2 slidegap">Holiday Parties</h3>
                </div>
              </div>

              <div className="col s4 divgap">
                <img src={image6} alt="Notebook" className="cateringimg" />
                <div className="">
                  <h3 className="para2 slidegap">Field Trips</h3>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="desktopViewSlider13">
          <h2 className="heading ">Services</h2>
          <div className="row">
            <div className="col-sm-12 service">
              <div className="col s3" style={this.style5}>
                <img src={image1} alt="Notebook" style={this.style8} />
                <div className="">
                  <h3 className="para2" style={this.style3}>
                    Birthday Parties
                  </h3>
                </div>
              </div>

              <div className="col s3" style={this.style5}>
                <img src={image2} alt="Notebook" style={this.style8} />
                <div className="">
                  <h3 className="para2" style={this.style3}>
                    Corporate Events
                  </h3>
                </div>
              </div>

              <div className="col s3" style={this.style5}>
                <img src={image3} alt="Notebook" style={this.style8} />
                <div className="">
                  <h3 className="para2" style={this.style3}>
                    Social Gathering
                  </h3>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-sm-12 service">
              <div className="col s3 " style={this.style5}>
                <img src={image4} alt="Notebook" style={this.style8} />
                <div className="">
                  <h3 className="para2" style={this.style3}>
                    Holiday Parties
                  </h3>
                </div>
              </div>

              <div className="col s3" style={this.style5}>
                <img src={image5} alt="Notebook" style={this.style8} />
                <div className="">
                  <h3 className="para2" style={this.style3}>
                    Sports Gathering
                  </h3>
                </div>
              </div>

              <div className="col s3" style={this.style5}>
                <img src={image6} alt="Notebook" style={this.style8} />
                <div className="">
                  <h3 className="para2" style={this.style3}>
                    Field Trip
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mobileViewSlider13">
          <h2 className="heading ">Services</h2>
          <div className="row">
            <div className="col-sm-12 service">
              <div className="col s12 " style={this.style5}>
                <img src={image1} alt="Notebook" style={this.style8} />
                <div className="">
                  <h3 className="para2" style={this.style3}>
                    Birthday Parties
                  </h3>
                </div>
              </div>

              <div className="col s12" style={this.style5}>
                <img src={image2} alt="Notebook" style={this.style8} />
                <div className="">
                  <h3 className="para2" style={this.style3}>
                    Corporate Events
                  </h3>
                </div>
              </div>

              <div className="col s12" style={this.style5}>
                <img src={image3} alt="Notebook" style={this.style8} />
                <div className="">
                  <h3 className="para2" style={this.style3}>
                    Social Gathering
                  </h3>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-sm-12 service">
              <div className="col s12 " style={this.style5}>
                <img src={image4} alt="Notebook" style={this.style8} />
                <div className="">
                  <h3 className="para2" style={this.style3}>
                    Holiday Parties
                  </h3>
                </div>
              </div>

              <div className="col s12" style={this.style5}>
                <img src={image5} alt="Notebook" style={this.style8} />
                <div className="">
                  <h3 className="para2" style={this.style3}>
                    Sports Gathering
                  </h3>
                </div>
              </div>

              <div className="col s12" style={this.style5}>
                <img src={image6} alt="Notebook" style={this.style8} />
                <div className="">
                  <h3 className="para2" style={this.style3}>
                    Field Trip
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default headerCatering;
