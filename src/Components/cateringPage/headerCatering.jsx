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
    width: 356,
    height: 90,
    fontSize: 27,
    paddingTop: 30
  };
  style1 = {
    paddingTop: 15
  };
  style8 = {
    width: 356
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
          <img src={slider2} alt="Notebook" style={this.style4} />
          <div className="" />
        </div>
        <div className="">
          <h2 className="heading ">Services</h2>
          <div className="row">
            <div className="col-sm-12 service">
              <div className="col s3 " style={this.style5}>
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
                <img src={image2} alt="Notebook" style={this.style8} />
                <div className="">
                  <h3 className="para2" style={this.style3}>
                    Social gathering
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
        {/* <h3 className="head">OUR PLANS</h3>

        <div className="row">
          <div className="col div" style={this.style} />

          <div className="col div1" style={this.style} />

          <div className="col div2" style={this.style} />
        </div> */}

        <div>
          {/* <p className="slide">
            Hey There!
            <p style={this.style1}>
              Planning a party - Biryani by Kilo loves being a part of your
              celebrations and this time is no different, with Biryani & Kebabs
              we can add a little bit warmth and a whole lot of love to your
              celebrations.
            </p>
            <p style={this.style1}>
              We've got you covered with a wide variety of Biryani's & Kebabs to
              indulge in! Gatherings, Pre Wedding, Corporate & media events.
              Variety of Biryani & Kebabs.
            </p>
            <p style={this.style1}>
              Fill in your information here or give us a call at 88515-14765 for
              special discounts and offer.
            </p>
          </p> */}
        </div>
      </div>
    );
  }
}

export default headerCatering;
